import { ISeason } from '../../../../interfaces/ISeason';

export interface IListSeason {
    item: ISeason;
    onItemClick(item: ISeason): void;
}
