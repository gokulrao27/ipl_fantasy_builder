import { schedule, teams, findTeamPlayerByName } from '../src/data/base';

const ensure = (condition: unknown, message: string): void => {
  if (!condition) throw new Error(message);
};

const teamById = new Map(teams.map((team) => [team.id, team]));
const upcoming = schedule.filter((match) => match.status === 'upcoming');
ensure(upcoming.length > 0, 'Expected upcoming matches to validate.');

for (const match of upcoming) {
  ensure(match.pitchReport.includes('first-innings average') || match.pitchReport.includes('first-innings avg'), `${match.id}: pitch report should include first-innings trend.`);
  ensure(match.pitchReport.includes('chasing success'), `${match.id}: pitch report should include chasing success.`);
  ensure(match.pitchReport.includes('best bowling'), `${match.id}: pitch report should include best bowling trend.`);

  const interesting = match.interestingStats.join(' | ').toLowerCase();
  ensure(interesting.includes('win predictor'), `${match.id}: interesting stats should include win predictor.`);
  ensure(!interesting.includes('http://') && !interesting.includes('https://'), `${match.id}: interesting stats should not expose raw URLs.`);

  const team1 = teamById.get(match.team1);
  const team2 = teamById.get(match.team2);
  ensure(Boolean(team1) && Boolean(team2), `${match.id}: teams must exist.`);
  ensure(match.playerBattles.length >= 2, `${match.id}: at least two key matchups are required.`);

  for (const battle of match.playerBattles) {
    const batterInTeam1 = Boolean(team1 && findTeamPlayerByName(team1, battle.batter));
    const batterInTeam2 = Boolean(team2 && findTeamPlayerByName(team2, battle.batter));
    const bowlerInTeam1 = Boolean(team1 && findTeamPlayerByName(team1, battle.bowler));
    const bowlerInTeam2 = Boolean(team2 && findTeamPlayerByName(team2, battle.bowler));

    const validDirect = batterInTeam1 && bowlerInTeam2;
    const validReverse = batterInTeam2 && bowlerInTeam1;
    ensure(validDirect || validReverse, `${match.id}: invalid matchup ${battle.batter} vs ${battle.bowler}.`);
  }
}

console.log(`Generated insight validation passed for ${upcoming.length} upcoming matches.`);
