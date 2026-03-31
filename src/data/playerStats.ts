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
