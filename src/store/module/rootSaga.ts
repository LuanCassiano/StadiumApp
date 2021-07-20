import { all } from 'redux-saga/effects';

import league from './League/sagas';

export default function* rootSaga(): Generator {
    yield all([league]);
}
