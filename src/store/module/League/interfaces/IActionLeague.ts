import { Action } from 'redux';
import { ILeague, ILeagueData } from '../../../../interfaces/ILeague';

import { LeagueTypes } from '../types';

interface IActionLeaguesRequest extends Action {
    type: LeagueTypes.GET_LEAGUES_REQUEST;
}

interface IActionLeaguesSuccess extends Action {
    type: LeagueTypes.GET_LEAGUES_SUCCESS;
    payload: ILeagueData[];
}

interface IActionGetLeagueByIdRequest extends Action {
    type: LeagueTypes.GET_LEAGUE_BY_ID_REQUEST;
}

interface IActionGetLeagueByIdSuccess extends Action {
    type: LeagueTypes.GET_LEAGUE_BY_ID_SUCCESS;
    payload: ILeague;
}

export type IActionsLeague =
    | IActionLeaguesRequest
    | IActionLeaguesSuccess
    | IActionGetLeagueByIdRequest
    | IActionGetLeagueByIdSuccess;
