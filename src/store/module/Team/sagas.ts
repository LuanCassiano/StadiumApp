import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IApiResponse } from '../../../interfaces/IApiResponse';

import api from '../../../services/api';

import { TeamTypes } from './types';

import { getTeamSuccess } from './actions';
import { ITeam } from '../../../interfaces/ITeam';
import { IVenue } from '../../../interfaces/IVenue';

interface IResponse {
    team: ITeam;
    venue: IVenue;
}

export function* getTeam({ payload: { idTeam, idLeague, season } }: AnyAction) {
    try {
        const response: AxiosResponse<IApiResponse<IResponse[]>> = yield call(
            api.get,
            '/teams',
            {
                params: {
                    id: idTeam,
                    league: idLeague,
                    season,
                },
            },
        );

        yield put(
            getTeamSuccess(
                response.data.response[0].team,
                response.data.response[0].venue,
            ),
        );
    } catch (error) {}
}

export default all([takeLatest(TeamTypes.GET_TEAM_REQUEST, getTeam)]);
