import { ISeason } from './ISeason';

export interface ILeague {
    league: {
        id: number;
        name: string;
        type: string;
        logo: string;
    };
    seasons: ISeason[];
}
