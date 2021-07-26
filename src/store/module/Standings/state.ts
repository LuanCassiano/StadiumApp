import { ILeagueStandings } from '../../../interfaces/IStandings';
import { ITeam } from '../../../interfaces/ITeam';

export interface IStandingsState {
    readonly data: ILeagueStandings[];
    readonly teamsLeague: ITeam[];
    readonly loading: boolean;
}
