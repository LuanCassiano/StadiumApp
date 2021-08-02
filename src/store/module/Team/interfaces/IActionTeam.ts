import { Action } from 'redux';
import { ITeam } from '../../../../interfaces/ITeam';
import { IVenue } from '../../../../interfaces/IVenue';

import { TeamTypes } from '../types';

interface IActionTeamRequest extends Action {
    type: TeamTypes.GET_TEAM_REQUEST;
}

interface IActionTeamSuccess extends Action {
    type: TeamTypes.GET_TEAM_SUCCESS;
    payload: { team: ITeam; venue: IVenue };
}

export type IActionsTeam = IActionTeamRequest | IActionTeamSuccess;
