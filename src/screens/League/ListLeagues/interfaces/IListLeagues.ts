import { ILeague } from '../../../../interfaces/ILeague';

export interface IListLeague {
    item: ILeague;
    onItemClick(item: ILeague): void;
}
