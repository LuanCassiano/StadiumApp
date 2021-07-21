import { ILeagueStandings } from '../../../interfaces/IStandings';
import { StandingsTypes } from './types';

export function getStandingsRequest(league: number, season: number) {
    return {
        type: StandingsTypes.GET_STANDINGS_REQUEST,
        payload: { league, season },
    };
}

export function getStandingsSuccess(data: ILeagueStandings[]) {
    return {
        type: StandingsTypes.GET_STANDINGS_SUCCESS,
        payload: data,
    };
}
