import { ILeagueStandings } from '../../../interfaces/IStandings';

export interface IStandingsState {
    readonly data: ILeagueStandings[];
    readonly loading: boolean;
}
