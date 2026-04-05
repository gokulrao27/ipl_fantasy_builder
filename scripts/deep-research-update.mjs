#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const IPL_DIVISION = 'IPL';
const IPL_SEASON = '2026';
const INJURY_KEYWORDS = ['injury', 'injured', 'replacement', 'ruled out', 'unavailable', 'fitness'];
const IPL_CONTEXT_KEYWORDS = ['ipl', 'indian premier league', 't20', 'csk', 'mi', 'rcb', 'kkr', 'dc', 'pbks', 'rr', 'gt', 'srh', 'lsg'];

const EXTERNAL_SOURCES = [
  { name: 'IPLT20', url: 'https://www.iplt20.com/news', type: 'html' },
  { name: 'ESPNcricinfo', url: 'https://www.espncricinfo.com/rss/content/story/feeds/0.xml', type: 'rss' },
  { name: 'Cricbuzz', url: 'https://www.cricbuzz.com/cricket-news/rss', type: 'rss' },
  { name: 'Indian Express', url: 'https://indianexpress.com/section/sports/cricket/feed/', type: 'rss' },
  { name: 'CREX', url: 'https://crex.live/', type: 'html' },
  { name: 'Sports Blog Signals', url: 'https://www.sportskeeda.com/cricket/rss', type: 'rss' },
];

const teamCodeToId = {
  CSK: 'csk',
  MI: 'mi',
  RCB: 'rcb',
  KKR: 'kkr',
  DC: 'dc',
  PBKS: 'pbks',
  RR: 'rr',
  GT: 'gt',
  SRH: 'srh',
  LSG: 'lsg',
};

const fetchText = async (url) => {
  return execFileSync(
    'python',
    [
      '-c',
      [
        'from urllib.request import Request, urlopen',
        'import sys',
        'url = sys.argv[1]',
        "req = Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.iplt20.com/'})",
        "print(urlopen(req, timeout=30).read().decode('utf-8', 'ignore'))",
      ].join(';'),
      url,
    ],
    { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
  );
};

const parseWrappedJson = (payload, wrapperName) => {
  const prefix = `${wrapperName}(`;
  const start = payload.indexOf(prefix);
  const end = payload.lastIndexOf(')');
  if (start === -1 || end === -1) {
    throw new Error(`Unable to parse ${wrapperName} wrapper.`);
  }
  return JSON.parse(payload.slice(start + prefix.length, end));
};

const decodeHtml = (value = '') => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, '\'')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

const normalizeTeamCode = (code = '') => code.toUpperCase().trim();

const parseRunsFromSummary = (summary = '') => {
  const value = String(summary).trim();
  const match = value.match(/(\d+)\s*\/\s*(\d+)/);
  if (match) return Number(match[1]);
  const simple = value.match(/^(\d+)/);
  return simple ? Number(simple[1]) : 0;
};

const resolveWinnerTeamId = (match, team1Id, team2Id) => {
  const winningTeamId = Number(match.WinningTeamID || 0);
  if (winningTeamId) {
    if (winningTeamId === Number(match.FirstBattingTeamID)) return team1Id;
    if (winningTeamId === Number(match.SecondBattingTeamID)) return team2Id;
  }

  const comments = String(match.Comments || '').toLowerCase();
  if (comments.includes(' won by ')) {
    if (comments.includes(String(match.FirstBattingTeamName || '').toLowerCase())) return team1Id;
    if (comments.includes(String(match.SecondBattingTeamName || '').toLowerCase())) return team2Id;
  }
  return null;
};

const buildTeamSummary = (matches) => {
  const summary = Object.values(teamCodeToId).reduce((acc, teamId) => {
    acc[teamId] = { played: 0, won: 0, lost: 0, ties: 0, runsFor: 0, runsAgainst: 0 };
    return acc;
  }, {});

  for (const match of matches) {
    const team1Id = teamCodeToId[normalizeTeamCode(match.FirstBattingTeamCode)] || teamCodeToId[normalizeTeamCode(match.HomeTeamCode)];
    const team2Id = teamCodeToId[normalizeTeamCode(match.SecondBattingTeamCode)] || teamCodeToId[normalizeTeamCode(match.AwayTeamCode)];
    if (!team1Id || !team2Id) continue;

    const team1Score = parseRunsFromSummary(match.FirstBattingSummary);
    const team2Score = parseRunsFromSummary(match.SecondBattingSummary);

    summary[team1Id].played += 1;
    summary[team2Id].played += 1;
    summary[team1Id].runsFor += team1Score;
    summary[team1Id].runsAgainst += team2Score;
    summary[team2Id].runsFor += team2Score;
    summary[team2Id].runsAgainst += team1Score;

    const winner = resolveWinnerTeamId(match, team1Id, team2Id);
    if (winner === team1Id) {
      summary[team1Id].won += 1;
      summary[team2Id].lost += 1;
    } else if (winner === team2Id) {
      summary[team2Id].won += 1;
      summary[team1Id].lost += 1;
    } else {
      summary[team1Id].ties += 1;
      summary[team2Id].ties += 1;
    }
  }

  return summary;
};

const extractInjuryNews = (newsHtml) => {
  const entries = [];
  const linkRegex = /<a[^>]*href="(\/news\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = linkRegex.exec(newsHtml)) !== null) {
    const url = `https://www.iplt20.com${match[1]}`;
    const title = match[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();

    if (!title) continue;
    const lower = title.toLowerCase();
    if (INJURY_KEYWORDS.some((keyword) => lower.includes(keyword))) {
      entries.push({ title, url });
    }
    if (entries.length >= 8) break;
  }

  return entries;
};

const extractRssItems = (xml, sourceName) => {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const chunk = match[1];
    const title = decodeHtml((chunk.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, ''));
    const link = decodeHtml((chunk.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, ''));
    if (!title || !link) continue;
    items.push({ title, url: link, source: sourceName });
    if (items.length >= 25) break;
  }
  return items;
};

const extractHtmlAnchors = (html, sourceName, baseUrl) => {
  const items = [];
  const linkRegex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const title = decodeHtml(match[2].replace(/<[^>]+>/g, ' '));
    if (!title || title.length < 16) continue;
    const url = href.startsWith('http') ? href : new URL(href, baseUrl).toString();
    items.push({ title, url, source: sourceName });
    if (items.length >= 40) break;
  }
  return items;
};

const filterIplContextItems = (items) => {
  return items.filter((item) => {
    const lower = `${item.title} ${item.url}`.toLowerCase();
    return IPL_CONTEXT_KEYWORDS.some((keyword) => lower.includes(keyword));
  });
};

const main = async () => {
  const competitionPayload = await fetchText('https://scores.iplt20.com/ipl/mc/competition.js');
  const competitionData = parseWrappedJson(competitionPayload, 'oncomptetion');

  const competition = (competitionData.competition || []).find((item) =>
    item.DivisionName === IPL_DIVISION &&
    String(item.SeasonID) === String((competitionData.division || []).find((d) => d.DivisionName === IPL_DIVISION && d.SeasonName === IPL_SEASON)?.SeasonID || '')
  );

  if (!competition) {
    throw new Error(`Unable to find ${IPL_DIVISION} ${IPL_SEASON} competition in feed.`);
  }

  const scheduleUrl = `${competition.feedsource}/${competition.CompetitionID}-matchschedule.js`;
  const schedulePayload = await fetchText(scheduleUrl);
  const scheduleData = parseWrappedJson(schedulePayload, 'MatchSchedule');
  const matches = Array.isArray(scheduleData.Matchsummary) ? scheduleData.Matchsummary : [];

  const completedMatches = matches
    .filter((m) => String(m.MatchStatus).toLowerCase() === 'post')
    .map((m) => ({
      matchId: m.MatchID,
      date: m.MatchDate,
      team1Code: normalizeTeamCode(m.FirstBattingTeamCode),
      team2Code: normalizeTeamCode(m.SecondBattingTeamCode),
      team1Score: parseRunsFromSummary(m.FirstBattingSummary),
      team2Score: parseRunsFromSummary(m.SecondBattingSummary),
      result: m.Comments || m.MatchResult || m.MatchName,
    }));

  const teamSummary = buildTeamSummary(matches.filter((m) => String(m.MatchStatus).toLowerCase() === 'post'));

  const sourceResults = [];
  const aggregatedItems = [];

  for (const source of EXTERNAL_SOURCES) {
    try {
      const payload = await fetchText(source.url);
      const rawItems = source.type === 'rss'
        ? extractRssItems(payload, source.name)
        : extractHtmlAnchors(payload, source.name, source.url);
      const contextualItems = filterIplContextItems(rawItems);
      sourceResults.push({
        name: source.name,
        url: source.url,
        type: source.type,
        success: true,
        extractedItems: rawItems.length,
        contextualItems: contextualItems.length,
      });
      aggregatedItems.push(...contextualItems.slice(0, 15));
    } catch (error) {
      sourceResults.push({
        name: source.name,
        url: source.url,
        type: source.type,
        success: false,
        extractedItems: 0,
        contextualItems: 0,
        error: String(error?.message || error),
      });
    }
  }

  const dedupedItems = [];
  const seenLinks = new Set();
  for (const item of aggregatedItems) {
    if (seenLinks.has(item.url)) continue;
    seenLinks.add(item.url);
    dedupedItems.push(item);
  }

  const injuryNews = dedupedItems
    .filter((item) => INJURY_KEYWORDS.some((keyword) => item.title.toLowerCase().includes(keyword)))
    .slice(0, 12);

  const snapshot = {
    updatedAt: new Date().toISOString(),
    source: {
      competitionFeed: 'https://scores.iplt20.com/ipl/mc/competition.js',
      scheduleFeed: scheduleUrl,
      newsFeed: 'https://www.iplt20.com/news',
      multiSourceFeeds: EXTERNAL_SOURCES.map((s) => s.url),
    },
    competition: {
      competitionId: competition.CompetitionID,
      competitionName: competition.CompetitionName,
      season: IPL_SEASON,
    },
    completedMatches,
    teamSummary,
    injuryNews,
    researchSources: sourceResults,
    topExternalHeadlines: dedupedItems.slice(0, 20),
  };

  const output = `// Auto-generated by scripts/deep-research-update.mjs. Do not edit manually.\n` +
    `export const deepResearchSnapshot = ${JSON.stringify(snapshot, null, 2)} as const;\n`;

  await writeFile(new URL('../src/data/deepResearch.ts', import.meta.url), output, 'utf8');
  const successfulSources = sourceResults.filter((s) => s.success).length;
  console.log(`Updated deepResearch snapshot with ${completedMatches.length} completed matches, ${injuryNews.length} injury headlines, sources: ${successfulSources}/${sourceResults.length}.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
