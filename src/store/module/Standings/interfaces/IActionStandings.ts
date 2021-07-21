import { Action } from 'redux';
import { IStandings } from '../../../../interfaces/IStandings';
import { StandingsTypes } from '../types';

export interface IActionStandingsRequest extends Action {
    type: StandingsTypes.GET_STANDINGS_REQUEST;
}

export interface IActionStandingsSuccess extends Action {
    type: StandingsTypes.GET_STANDINGS_SUCCESS;
    payload: IStandings[];
}

export type IActionsStandings =
    | IActionStandingsRequest
    | IActionStandingsSuccess;
