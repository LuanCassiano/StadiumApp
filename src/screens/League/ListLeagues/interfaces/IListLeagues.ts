import { ILeague, ILeagueData } from '../../../../interfaces/ILeague';

export interface IListLeague {
    item: ILeagueData;
    onItemClick(item: ILeagueData): void;
}
