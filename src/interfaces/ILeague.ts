import { ISeason } from './ISeason';

export interface ILeague {
    id: number;
    name: string;
    type: string;
    logo: string;
}

export interface ILeagueData {
    league: ILeague;
    seasons: ISeason[];
}
