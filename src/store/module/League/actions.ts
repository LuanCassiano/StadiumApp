import { ILeague } from '../../../interfaces/ILeague';
import { LeagueTypes } from './types';

export function getLeaguesRequest(page?: number, perPage?: number) {
    return {
        type: LeagueTypes.GET_LEAGUES_REQUEST,
        payload: { page, perPage },
    };
}

export function getLeaguesSuccess(data: ILeague[]) {
    return {
        type: LeagueTypes.GET_LEAGUES_SUCCESS,
        payload: data,
    };
}
