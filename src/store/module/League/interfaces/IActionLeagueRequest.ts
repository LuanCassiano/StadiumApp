import { Action } from 'redux';
import { ILeague } from '../../../../interfaces/ILeague';
import { LeagueTypes } from '../types';

export interface IActionLeaguesRequest extends Action {
    type: LeagueTypes.GET_LEAGUES_REQUEST;
}

export interface IActionLeaguesSuccess extends Action {
    type: LeagueTypes.GET_LEAGUES_SUCCESS;
    payload: ILeague[];
}

export type IActionsLeague = IActionLeaguesRequest | IActionLeaguesSuccess;
