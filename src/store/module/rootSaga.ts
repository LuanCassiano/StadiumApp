import { all } from 'redux-saga/effects';

import league from './League/sagas';
import standings from './Standings/sagas';

export default function* rootSaga(): Generator {
    yield all([league, standings]);
}
