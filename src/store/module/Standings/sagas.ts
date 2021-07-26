import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IApiResponse } from '../../../interfaces/IApiResponse';
import { ILeagueStandings } from '../../../interfaces/IStandings';

import api from '../../../services/api';

import { StandingsTypes } from './types';
import { getTeamsLeagueSuccess, getStandingsSuccess } from './actions';

import { getTeamsParticipating } from '../../../utils/ParticipatingTeams';

export function* getStandings({ payload: { league, season } }: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<ILeagueStandings[]>> =
            yield call(api.get, '/standings', {
                params: {
                    league,
                    season,
                },
            });

        yield put(getStandingsSuccess(response.data.response));
    } catch (error) {
        console.tron.log('error', Object.keys(error));
    }
}

export function* getParticipatingTeams({
    payload: { league, season },
}: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<ILeagueStandings[]>> =
            yield call(api.get, '/standings', {
                params: {
                    league,
                    season,
                },
            });

        const result = getTeamsParticipating(response.data.response[0].league);

        result.sort((a, b) => a.name.localeCompare(b.name));

        yield put(getTeamsLeagueSuccess(result));
    } catch (error) {
        console.tron.log('error', Object.keys(error));
    }
}

export default all([
    takeLatest(
        StandingsTypes.GET_PARTICIPATING_TEAMS_REQUEST,
        getParticipatingTeams,
    ),
    takeLatest(StandingsTypes.GET_STANDINGS_REQUEST, getStandings),
]);
