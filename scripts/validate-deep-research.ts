import { deepResearchSnapshot } from '../src/data/deepResearch';

const ensure = (condition: unknown, message: string): void => {
  if (!condition) throw new Error(message);
};

const completedMatches = deepResearchSnapshot.completedMatches || [];
ensure(Array.isArray(completedMatches), 'completedMatches must be an array');
ensure(completedMatches.length >= 1, 'completedMatches must contain at least one item');

for (const match of completedMatches) {
  ensure(typeof match.matchId === 'number', 'matchId must be a number');
  ensure(typeof match.date === 'string' && match.date.length >= 8, 'date must be a valid string');
  ensure(typeof match.team1Code === 'string' && match.team1Code.length >= 2, 'team1Code must be set');
  ensure(typeof match.team2Code === 'string' && match.team2Code.length >= 2, 'team2Code must be set');
  ensure(Number.isFinite(match.team1Score) && match.team1Score >= 0, 'team1Score must be a non-negative number');
  ensure(Number.isFinite(match.team2Score) && match.team2Score >= 0, 'team2Score must be a non-negative number');
  ensure(typeof match.result === 'string' && match.result.length > 0, 'result must be non-empty');
}

const teamSummary = deepResearchSnapshot.teamSummary;
ensure(Boolean(teamSummary), 'teamSummary must exist');

const teams = Object.entries(teamSummary);
ensure(teams.length === 10, 'teamSummary must include all IPL teams');
for (const [teamId, row] of teams) {
  ensure(row.played >= 0, `${teamId}: played must be non-negative`);
  ensure(row.won >= 0, `${teamId}: won must be non-negative`);
  ensure(row.lost >= 0, `${teamId}: lost must be non-negative`);
  ensure(row.ties >= 0, `${teamId}: ties must be non-negative`);
  ensure(row.runsFor >= 0, `${teamId}: runsFor must be non-negative`);
  ensure(row.runsAgainst >= 0, `${teamId}: runsAgainst must be non-negative`);
  ensure(row.won + row.lost + row.ties === row.played, `${teamId}: won+lost+ties must equal played`);
}

const updatedAt = Date.parse(deepResearchSnapshot.updatedAt);
ensure(Number.isFinite(updatedAt), 'updatedAt must be a valid ISO date');

const researchSources = (deepResearchSnapshot.researchSources || []) as Array<{ success: boolean }>;
ensure(Array.isArray(researchSources), 'researchSources must be an array');
const successfulSources = researchSources.filter((source) => source.success).length;
ensure(successfulSources >= 3, `at least 3 research sources must succeed (got ${successfulSources})`);

const externalHeadlines = (deepResearchSnapshot.topExternalHeadlines || []) as Array<{ title: string; url: string }>;
ensure(Array.isArray(externalHeadlines), 'topExternalHeadlines must be an array');
ensure(externalHeadlines.length >= 3, 'topExternalHeadlines should include at least 3 contextual items');

console.log(`Deep research snapshot validated: ${completedMatches.length} completed matches, ${teams.length} teams, sources ${successfulSources}/${researchSources.length}.`);
