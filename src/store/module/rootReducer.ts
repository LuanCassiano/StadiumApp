import { combineReducers } from 'redux';

import league from './League/reducer';
import standings from './Standings/reducer';

export const rootReducer = combineReducers({
    league,
    standings,
});

export type RootState = ReturnType<typeof rootReducer>;
