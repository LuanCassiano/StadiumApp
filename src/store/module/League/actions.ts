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

export function getLeagueByIdRequest(id: number) {
    return {
        type: LeagueTypes.GET_LEAGUE_BY_ID_REQUEST,
        payload: id,
    };
}

export function getLeagueByIdSuccess(data: ILeague) {
    return {
        type: LeagueTypes.GET_LEAGUE_BY_ID_SUCCESS,
        payload: data,
    };
}
