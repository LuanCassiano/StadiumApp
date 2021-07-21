import { ILeague } from '../../../interfaces/ILeague';

export interface ILeagueState {
    readonly data: ILeague[];
    readonly loading: boolean;
}
