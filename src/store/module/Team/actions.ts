import { ITeam } from '../../../interfaces/ITeam';
import { IVenue } from '../../../interfaces/IVenue';
import { TeamTypes } from './types';

export function getTeamRequest(
    idTeam: number,
    idLeague: number,
    season: number,
) {
    return {
        type: TeamTypes.GET_TEAM_REQUEST,
        payload: { idTeam, idLeague, season },
    };
}

export function getTeamSuccess(team: ITeam, venue: IVenue) {
    return {
        type: TeamTypes.GET_TEAM_SUCCESS,
        payload: { team, venue },
    };
}
