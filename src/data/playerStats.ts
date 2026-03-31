import { teams, schedule, Team, Match } from './base';

export interface PlayerMatchTag {
  matchId: string;
  matchNumber: number;
  date: string;
  dateLabel: string;
  teamId: string;
  teamShortName: string;
  opponentTeamId: string;
  opponentShortName: string;
  status: Match['status'];
  played: boolean;
}

export interface BattingRow {
  playerId: string;
  player: string;
  teamId: string;
  teamShortName: string;
  matches: number;
  inns: number;
  runs: number;
  avg: number;
  sr: number;
  balls: number;
  fours: number;
  sixes: number;
  highestScore: number;
  hundreds: number;
  fifties: number;
  nineties: number;
}

export interface BowlingRow {
  playerId: string;
  player: string;
  teamId: string;
  teamShortName: string;
  matches: number;
  overs: number;
  balls: number;
  wickets: number;
  avg: number;
  runs: number;
  fourWickets: number;
  fiveWickets: number;
  economy: number;
  strikeRate: number;
  bestFigure: string;
}

export interface HomeHeaderStats {
  batting: Record<string, string>;
  bowling: Record<string, string>;
}

export interface StatLeaderItem {
  playerId: string;
  player: string;
  teamShortName: string;
  value?: number | string;
  cells: Array<number | string>;
}

export interface StatMetricColumn {
  key: string;
  label: string;
  align?: 'left' | 'right';
}

export interface StatMetricLeaders {
  id: string;
  label: string;
  category: 'batting' | 'bowling';
  columns: StatMetricColumn[];
  items: StatLeaderItem[];
}

const ballsFromOvers = (overs: string): number => {
  const [o, b] = overs.split('.').map(Number);
  return (o || 0) * 6 + (b || 0);
};

const formatOverValue = (balls: number): string => `${Math.floor(balls / 6)}.${balls % 6}`;

export const playerMatchTags = (() => {
  const tags = new Map<string, PlayerMatchTag[]>();

  for (const match of schedule) {
    const team1 = teams.find((t) => t.id === match.team1);
    const team2 = teams.find((t) => t.id === match.team2);
    if (!team1 || !team2) continue;

    [...team1.players, ...team2.players].forEach((player) => {
      const isInCompletedCard = match.completedDetails?.innings.some((inning) =>
        inning.batters.some((b) => b.name === player.name) || inning.bowlers.some((b) => b.name === player.name) || inning.didNotBat.includes(player.name)
      ) ?? false;

      const team = player.id.startsWith(team1.id) ? team1 : team2;
      const opponent = team.id === team1.id ? team2 : team1;

      const entry: PlayerMatchTag = {
        matchId: match.id,
        matchNumber: match.matchNumber,
        date: match.date,
        dateLabel: match.dateLabel,
        teamId: team.id,
        teamShortName: team.shortName,
        opponentTeamId: opponent.id,
        opponentShortName: opponent.shortName,
        status: match.status,
        played: match.status === 'completed' ? isInCompletedCard : false,
      };

      const prev = tags.get(player.id) || [];
      prev.push(entry);
      tags.set(player.id, prev);
    });
  }

  return tags;
})();

export const battingTable: BattingRow[] = (() => {
  const map = new Map<string, BattingRow & { outs: number; balls: number }>();

  schedule.forEach((match) => {
    if (!match.completedDetails) return;

    match.completedDetails.innings.forEach((inning) => {
      const team = teams.find((t) => t.id === inning.teamId);
      if (!team) return;

      inning.batters.forEach((batter) => {
        const player = team.players.find((p) => p.name === batter.name);
        if (!player) return;

        const key = player.id;
        const current = map.get(key) || {
          playerId: player.id,
          player: player.name,
          teamId: team.id,
          teamShortName: team.shortName,
          matches: 0,
          inns: 0,
          runs: 0,
          avg: 0,
          sr: 0,
          fours: 0,
          sixes: 0,
          highestScore: 0,
          hundreds: 0,
          fifties: 0,
          nineties: 0,
          outs: 0,
          balls: 0,
        };

        current.inns += 1;
        current.runs += batter.runs;
        current.fours += batter.fours;
        current.sixes += batter.sixes;
        current.balls += batter.balls;
        current.highestScore = Math.max(current.highestScore, batter.runs);
        if (batter.runs >= 100) current.hundreds += 1;
        if (batter.runs >= 50 && batter.runs < 100) current.fifties += 1;
        if (batter.runs >= 90 && batter.runs < 100) current.nineties += 1;
        if (batter.howOut !== 'not out') current.outs += 1;

        map.set(key, current);
      });
    });
  });

  map.forEach((row) => {
    row.matches = new Set((playerMatchTags.get(row.playerId) || []).filter((m) => m.played).map((m) => m.matchId)).size;
    row.avg = row.outs > 0 ? Number((row.runs / row.outs).toFixed(2)) : row.runs;
    row.sr = row.balls > 0 ? Number(((row.runs * 100) / row.balls).toFixed(2)) : 0;
  });

  return [...map.values()]
    .sort((a, b) => b.runs - a.runs)
    .map(({ outs: _o, ...rest }) => rest);
})();

export const bowlingTable: BowlingRow[] = (() => {
  const map = new Map<string, BowlingRow & { bestWickets: number; bestRuns: number }>();

  schedule.forEach((match) => {
    if (!match.completedDetails) return;

    match.completedDetails.innings.forEach((inning) => {
      const bowlingTeamId = inning.teamId === match.team1 ? match.team2 : match.team1;
      const team = teams.find((t) => t.id === bowlingTeamId);
      if (!team) return;

      inning.bowlers.forEach((bowler) => {
        const player = team.players.find((p) => p.name === bowler.name);
        if (!player) return;

        const key = player.id;
        const current = map.get(key) || {
          playerId: player.id,
          player: player.name,
          teamId: team.id,
          teamShortName: team.shortName,
          matches: 0,
          overs: 0,
          balls: 0,
          wickets: 0,
          avg: 0,
          runs: 0,
          fourWickets: 0,
          fiveWickets: 0,
          economy: 0,
          strikeRate: 0,
          bestFigure: '0/0',
          bestWickets: 0,
          bestRuns: 999,
        };

        const balls = ballsFromOvers(bowler.overs);
        current.overs += Number((balls / 6).toFixed(1));
        current.balls += balls;
        current.runs += bowler.runs;
        current.wickets += bowler.wickets;
        if (bowler.wickets >= 4) current.fourWickets += 1;
        if (bowler.wickets >= 5) current.fiveWickets += 1;

        if (bowler.wickets > current.bestWickets || (bowler.wickets === current.bestWickets && bowler.runs < current.bestRuns)) {
          current.bestWickets = bowler.wickets;
          current.bestRuns = bowler.runs;
          current.bestFigure = `${bowler.wickets}/${bowler.runs}`;
        }

        map.set(key, current);
      });
    });
  });

  map.forEach((row) => {
    row.matches = new Set((playerMatchTags.get(row.playerId) || []).filter((m) => m.played).map((m) => m.matchId)).size;
    row.avg = row.wickets > 0 ? Number((row.runs / row.wickets).toFixed(2)) : 0;
    row.economy = row.balls > 0 ? Number(((row.runs * 6) / row.balls).toFixed(2)) : 0;
    row.strikeRate = row.wickets > 0 ? Number((row.balls / row.wickets).toFixed(2)) : 0;
    row.overs = Number(formatOverValue(row.balls));
  });

  return [...map.values()]
    .sort((a, b) => b.wickets - a.wickets || a.runs - b.runs)
    .map(({ bestWickets: _bw, bestRuns: _br, ...rest }) => rest);
})();

const topBy = <T,>(list: T[], pick: (item: T) => number, filter?: (item: T) => boolean) => {
  const filtered = filter ? list.filter(filter) : list;
  return filtered.slice().sort((a, b) => pick(b) - pick(a))[0];
};

export const homeHeaderStats: HomeHeaderStats = {
  batting: {
    'Most Runs': `${battingTable[0]?.player ?? '-'} (${battingTable[0]?.runs ?? 0})`,
    'Highest Scores': `${topBy(battingTable, (p) => p.highestScore)?.player ?? '-'} (${topBy(battingTable, (p) => p.highestScore)?.highestScore ?? 0})`,
    'Best Batting Average': `${topBy(battingTable, (p) => p.avg, (p) => p.inns >= 1)?.player ?? '-'} (${topBy(battingTable, (p) => p.avg, (p) => p.inns >= 1)?.avg ?? 0})`,
    'Best Batting Strike Rate': `${topBy(battingTable, (p) => p.sr, (p) => p.balls >= 10)?.player ?? '-'} (${topBy(battingTable, (p) => p.sr, (p) => p.balls >= 10)?.sr ?? 0})`,
    'Most Hundreds': `${topBy(battingTable, (p) => p.hundreds)?.player ?? '-'} (${topBy(battingTable, (p) => p.hundreds)?.hundreds ?? 0})`,
    'Most Fifties': `${topBy(battingTable, (p) => p.fifties)?.player ?? '-'} (${topBy(battingTable, (p) => p.fifties)?.fifties ?? 0})`,
    'Most Fours': `${topBy(battingTable, (p) => p.fours)?.player ?? '-'} (${topBy(battingTable, (p) => p.fours)?.fours ?? 0})`,
    'Most Sixes': `${topBy(battingTable, (p) => p.sixes)?.player ?? '-'} (${topBy(battingTable, (p) => p.sixes)?.sixes ?? 0})`,
    'Most Nineties': `${topBy(battingTable, (p) => p.nineties)?.player ?? '-'} (${topBy(battingTable, (p) => p.nineties)?.nineties ?? 0})`,
  },
  bowling: {
    'Most Wickets': `${bowlingTable[0]?.player ?? '-'} (${bowlingTable[0]?.wickets ?? 0})`,
    'Best Bowling Average': `${topBy(bowlingTable, (p) => -p.avg, (p) => p.wickets > 0)?.player ?? '-'} (${topBy(bowlingTable, (p) => -p.avg, (p) => p.wickets > 0)?.avg ?? 0})`,
    'Best Bowling': `${topBy(bowlingTable, (p) => Number(p.bestFigure.split('/')[0]) * 100 - Number(p.bestFigure.split('/')[1]))?.player ?? '-'} (${topBy(bowlingTable, (p) => Number(p.bestFigure.split('/')[0]) * 100 - Number(p.bestFigure.split('/')[1]))?.bestFigure ?? '0/0'})`,
    'Most 5 Wickets Haul': `${topBy(bowlingTable, (p) => p.fiveWickets)?.player ?? '-'} (${topBy(bowlingTable, (p) => p.fiveWickets)?.fiveWickets ?? 0})`,
    'Best Economy': `${topBy(bowlingTable, (p) => -p.economy, (p) => p.balls >= 12)?.player ?? '-'} (${topBy(bowlingTable, (p) => -p.economy, (p) => p.balls >= 12)?.economy ?? 0})`,
    'Best Bowling Strike Rate': `${topBy(bowlingTable, (p) => -p.strikeRate, (p) => p.wickets > 0)?.player ?? '-'} (${topBy(bowlingTable, (p) => -p.strikeRate, (p) => p.wickets > 0)?.strikeRate ?? 0})`,
  },
};

export const playerDetails = teams.flatMap((team: Team) =>
  team.players.map((player) => ({
    ...player,
    teamId: team.id,
    teamName: team.name,
    teamShortName: team.shortName,
    tags: playerMatchTags.get(player.id) || [],
    completedMatches: (playerMatchTags.get(player.id) || []).filter((tag) => tag.played).length,
    batting: battingTable.find((row) => row.playerId === player.id),
    bowling: bowlingTable.find((row) => row.playerId === player.id),
  }))
);

const topN = <T,>(rows: T[], by: (row: T) => number, n = 10, minFilter?: (row: T) => boolean) =>
  rows
    .filter((row) => (minFilter ? minFilter(row) : true))
    .slice()
    .sort((a, b) => by(b) - by(a))
    .slice(0, n);

export const statsMetricLeaders: StatMetricLeaders[] = [
  {
    id: 'most-runs',
    label: 'Most Runs',
    category: 'batting',
    columns: [{ key: 'runs', label: 'Runs', align: 'right' }, { key: 'inns', label: 'Inns', align: 'right' }, { key: 'avg', label: 'Avg', align: 'right' }, { key: 'sr', label: 'SR', align: 'right' }],
    items: topN(battingTable, (p) => p.runs).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.runs, cells: [p.runs, p.inns, p.avg, p.sr] })),
  },
  {
    id: 'highest-score',
    label: 'Highest Scores',
    category: 'batting',
    columns: [{ key: 'hs', label: 'HS', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'fours', label: '4s', align: 'right' }, { key: 'sixes', label: '6s', align: 'right' }],
    items: topN(battingTable, (p) => p.highestScore).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.highestScore, cells: [p.highestScore, p.runs, p.fours, p.sixes] })),
  },
  {
    id: 'best-batting-average',
    label: 'Best Batting Average',
    category: 'batting',
    columns: [{ key: 'avg', label: 'Avg', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'outs', label: 'Inns', align: 'right' }, { key: 'hs', label: 'HS', align: 'right' }],
    items: topN(battingTable, (p) => p.avg, 10, (p) => p.inns >= 1).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.avg, cells: [p.avg, p.runs, p.inns, p.highestScore] })),
  },
  {
    id: 'best-batting-strike-rate',
    label: 'Best Batting Strike Rate',
    category: 'batting',
    columns: [{ key: 'sr', label: 'SR', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'balls', label: 'Balls', align: 'right' }, { key: 'fours_sixes', label: '4s/6s', align: 'right' }],
    items: topN(battingTable, (p) => p.sr, 10, (p) => p.balls >= 10).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.sr, cells: [p.sr, p.runs, p.balls, `${p.fours}/${p.sixes}`] })),
  },
  {
    id: 'most-hundreds',
    label: 'Most Hundreds',
    category: 'batting',
    columns: [{ key: '100s', label: '100s', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'hs', label: 'HS', align: 'right' }, { key: 'sr', label: 'SR', align: 'right' }],
    items: topN(battingTable, (p) => p.hundreds).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.hundreds, cells: [p.hundreds, p.runs, p.highestScore, p.sr] })),
  },
  {
    id: 'most-fifties',
    label: 'Most Fifties',
    category: 'batting',
    columns: [{ key: '50s', label: '50s', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'avg', label: 'Avg', align: 'right' }, { key: 'hs', label: 'HS', align: 'right' }],
    items: topN(battingTable, (p) => p.fifties).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.fifties, cells: [p.fifties, p.runs, p.avg, p.highestScore] })),
  },
  {
    id: 'most-fours',
    label: 'Most Fours',
    category: 'batting',
    columns: [{ key: '4s', label: '4s', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'balls', label: 'Balls', align: 'right' }, { key: 'sr', label: 'SR', align: 'right' }],
    items: topN(battingTable, (p) => p.fours).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.fours, cells: [p.fours, p.runs, p.balls, p.sr] })),
  },
  {
    id: 'most-sixes',
    label: 'Most Sixes',
    category: 'batting',
    columns: [{ key: '6s', label: '6s', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'balls', label: 'Balls', align: 'right' }, { key: 'sr', label: 'SR', align: 'right' }],
    items: topN(battingTable, (p) => p.sixes).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.sixes, cells: [p.sixes, p.runs, p.balls, p.sr] })),
  },
  {
    id: 'most-nineties',
    label: 'Most Nineties',
    category: 'batting',
    columns: [{ key: '90s', label: '90s', align: 'right' }, { key: 'hs', label: 'HS', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'inns', label: 'Inns', align: 'right' }],
    items: topN(battingTable, (p) => p.nineties).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.nineties, cells: [p.nineties, p.highestScore, p.runs, p.inns] })),
  },
  {
    id: 'most-wickets',
    label: 'Most Wickets',
    category: 'bowling',
    columns: [{ key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'overs', label: 'Overs', align: 'right' }, { key: 'eco', label: 'Econ', align: 'right' }, { key: 'avg', label: 'Avg', align: 'right' }],
    items: topN(bowlingTable, (p) => p.wickets).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.wickets, cells: [p.wickets, p.overs, p.economy, p.avg] })),
  },
  {
    id: 'best-bowling-average',
    label: 'Best Bowling Average',
    category: 'bowling',
    columns: [{ key: 'avg', label: 'Avg', align: 'right' }, { key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }, { key: 'sr', label: 'SR', align: 'right' }],
    items: topN(bowlingTable, (p) => -p.avg, 10, (p) => p.wickets > 0).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.avg, cells: [p.avg, p.wickets, p.runs, p.strikeRate] })),
  },
  {
    id: 'best-bowling',
    label: 'Best Bowling',
    category: 'bowling',
    columns: [{ key: 'best', label: 'Best', align: 'right' }, { key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'eco', label: 'Econ', align: 'right' }, { key: 'overs', label: 'Overs', align: 'right' }],
    items: topN(bowlingTable, (p) => Number(p.bestFigure.split('/')[0]) * 100 - Number(p.bestFigure.split('/')[1])).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.bestFigure, cells: [p.bestFigure, p.wickets, p.economy, p.overs] })),
  },
  {
    id: 'most-5w',
    label: 'Most 5 Wickets Haul',
    category: 'bowling',
    columns: [{ key: '5w', label: '5W', align: 'right' }, { key: '4w', label: '4W', align: 'right' }, { key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'best', label: 'Best', align: 'right' }],
    items: topN(bowlingTable, (p) => p.fiveWickets).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.fiveWickets, cells: [p.fiveWickets, p.fourWickets, p.wickets, p.bestFigure] })),
  },
  {
    id: 'best-economy',
    label: 'Best Economy',
    category: 'bowling',
    columns: [{ key: 'eco', label: 'Econ', align: 'right' }, { key: 'overs', label: 'Overs', align: 'right' }, { key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'runs', label: 'Runs', align: 'right' }],
    items: topN(bowlingTable, (p) => -p.economy, 10, (p) => p.balls >= 12).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.economy, cells: [p.economy, p.overs, p.wickets, p.runs] })),
  },
  {
    id: 'best-bowling-sr',
    label: 'Best Bowling Strike Rate',
    category: 'bowling',
    columns: [{ key: 'sr', label: 'SR', align: 'right' }, { key: 'wkts', label: 'Wkts', align: 'right' }, { key: 'balls', label: 'Balls', align: 'right' }, { key: 'eco', label: 'Econ', align: 'right' }],
    items: topN(bowlingTable, (p) => -p.strikeRate, 10, (p) => p.wickets > 0).map((p) => ({ playerId: p.playerId, player: p.player, teamShortName: p.teamShortName, value: p.strikeRate, cells: [p.strikeRate, p.wickets, p.balls, p.economy] })),
  },
];
