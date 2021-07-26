import { ISeason } from './ISeason';
import { League } from './League';

export interface ILeague extends League {
    type: string;
}

export interface ILeagueData {
    league: ILeague;
    seasons: ISeason[];
}
