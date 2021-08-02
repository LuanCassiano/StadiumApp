import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IApiResponse } from '../../../interfaces/IApiResponse';
import { ILeagueData } from '../../../interfaces/ILeague';

import api from '../../../services/api';

import { LeagueTypes } from './types';
import { getLeaguesSuccess, getLeagueByIdSuccess } from './actions';

import { paginate } from '../../../utils/Pagination';

export function* getLeagues({ payload: { page, perPage } }: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<ILeagueData[]>> = yield call(
            api.get,
            '/leagues',
        );

        const res = paginate(response.data.response, page, perPage);

        yield put(getLeaguesSuccess(res.data));
    } catch (error) {
        console.tron.log('error', Object.keys(error));
    }
}

export function* getLeagueById({ payload }: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<ILeagueData[]>> = yield call(
            api.get,
            '/leagues',
            {
                params: {
                    id: payload,
                },
            },
        );

        yield put(getLeagueByIdSuccess(response.data.response[0].league));
    } catch (error) {
        console.tron.log('error', Object.keys(error));
    }
}

export default all([
    takeLatest(LeagueTypes.GET_LEAGUES_REQUEST, getLeagues),
    takeLatest(LeagueTypes.GET_LEAGUE_BY_ID_REQUEST, getLeagueById),
]);
