import { ILeague, ILeagueData } from '../../../interfaces/ILeague';

export interface ILeagueState {
    readonly data: ILeagueData[];
    readonly league: ILeague;
    readonly loading: boolean;
}
