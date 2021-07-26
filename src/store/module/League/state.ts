import { ILeague, ILeagueData } from '../../../interfaces/ILeague';

export interface ILeagueState {
    readonly data: ILeagueData[];
    readonly loading: boolean;
}
