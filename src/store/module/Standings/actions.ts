import { ILeagueStandings } from '../../../interfaces/IStandings';
import { ITeam } from '../../../interfaces/ITeam';
import { StandingsTypes } from './types';

export function getStandingsRequest(league: number, season: number) {
    return {
        type: StandingsTypes.GET_STANDINGS_REQUEST,
        payload: { league, season },
    };
}

export function getStandingsSuccess(data: ILeagueStandings[]) {
    return {
        type: StandingsTypes.GET_STANDINGS_SUCCESS,
        payload: data,
    };
}

export function getParticipatingTeamsRequest(league: number, season: number) {
    return {
        type: StandingsTypes.GET_PARTICIPATING_TEAMS_REQUEST,
        payload: { league, season },
    };
}

export function getParticipatingTeamsSuccess(data: ILeagueStandings[]) {
    return {
        type: StandingsTypes.GET_PARTICIPATING_TEAMS_SUCCESS,
        payload: data,
    };
}

export function getTeamsLeagueSuccess(data: ITeam[]) {
    return {
        type: StandingsTypes.GET_TEAMS_LEAGUE_SUCESS,
        payload: data,
    };
}
