import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IApiResponse } from '../../../interfaces/IApiResponse';
import { ILeagueStandings } from '../../../interfaces/IStandings';

import api from '../../../services/api';

import { StandingsTypes } from './types';
import { getStandingsSuccess } from './actions';

export function* getStandings({ payload: { league, season } }: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<ILeagueStandings[]>> =
            yield call(api.get, '/standings', {
                params: {
                    league,
                    season,
                },
            });

        // console.tron.log('response', response.data.response);

        yield put(getStandingsSuccess(response.data.response));
    } catch (error) {
        console.tron.log('error', Object.keys(error));
    }
}

export default all([
    takeLatest(StandingsTypes.GET_STANDINGS_REQUEST, getStandings),
]);
