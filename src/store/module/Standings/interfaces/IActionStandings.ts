import { Action } from 'redux';
import { ITeam } from '../../../../interfaces/ITeam';
import {
    ILeagueStandings,
    IStandings,
} from '../../../../interfaces/IStandings';
import { StandingsTypes } from '../types';

export interface IActionStandingsRequest extends Action {
    type: StandingsTypes.GET_STANDINGS_REQUEST;
}

export interface IActionStandingsSuccess extends Action {
    type: StandingsTypes.GET_STANDINGS_SUCCESS;
    payload: ILeagueStandings[];
}

export interface IActionTeamLeaguesSuccess extends Action {
    type: StandingsTypes.GET_TEAMS_LEAGUE_SUCESS;
    payload: ITeam[];
}

export interface IActionParticipatingTeamsRequest extends Action {
    type: StandingsTypes.GET_PARTICIPATING_TEAMS_REQUEST;
}

export interface IActionParticipatingTeamsSuccess extends Action {
    type: StandingsTypes.GET_PARTICIPATING_TEAMS_SUCCESS;
    payload: ILeagueStandings[];
}

export type IActionsStandings =
    | IActionStandingsRequest
    | IActionStandingsSuccess
    | IActionTeamLeaguesSuccess
    | IActionParticipatingTeamsRequest
    | IActionParticipatingTeamsSuccess;
