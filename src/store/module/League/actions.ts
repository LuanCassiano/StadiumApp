import { ILeague, ILeagueData } from '../../../interfaces/ILeague';
import { ITeam } from '../../../interfaces/ITeam';
import { LeagueTypes } from './types';

export function getLeaguesRequest(page?: number, perPage?: number) {
    return {
        type: LeagueTypes.GET_LEAGUES_REQUEST,
        payload: { page, perPage },
    };
}

export function getLeaguesSuccess(data: ILeagueData[]) {
    return {
        type: LeagueTypes.GET_LEAGUES_SUCCESS,
        payload: data,
    };
}
