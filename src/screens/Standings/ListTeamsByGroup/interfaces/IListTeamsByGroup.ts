import { IStandings } from '../../../../interfaces/IStandings';

export interface IListTeamsByGroup {
    item: IStandings;
    onTeamSelected(value: IStandings): void;
}
