import { all } from 'redux-saga/effects';

import league from './League/sagas';
import standings from './Standings/sagas';
import team from './Team/sagas';

export default function* rootSaga(): Generator {
    yield all([league, standings, team]);
}
