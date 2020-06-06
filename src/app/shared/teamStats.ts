import { Team } from './team';
import { TeamStatsOP } from './teamStats/OP';
import { TeamStatsOR } from './teamStats/OR';
import { TeamStatsDP } from './teamStats/DP';
import { TeamStatsDR } from './teamStats/DR';

export class TeamStats {
	team: Team;
	op: TeamStatsOP;
	or: TeamStatsOR;
	dp: TeamStatsDP;
	dr: TeamStatsDR;
}