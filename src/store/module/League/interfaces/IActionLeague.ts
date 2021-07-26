import { Action } from 'redux';
import { ILeague, ILeagueData } from '../../../../interfaces/ILeague';

import { LeagueTypes } from '../types';

export interface IActionLeaguesRequest extends Action {
    type: LeagueTypes.GET_LEAGUES_REQUEST;
}

export interface IActionLeaguesSuccess extends Action {
    type: LeagueTypes.GET_LEAGUES_SUCCESS;
    payload: ILeagueData[];
}

export type IActionsLeague = IActionLeaguesRequest | IActionLeaguesSuccess;
