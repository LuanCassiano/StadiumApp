import { combineReducers } from 'redux';

import league from './League/reducer';
import standings from './Standings/reducer';
import team from './Team/reducer';

export const rootReducer = combineReducers({
    league,
    standings,
    team,
});

export type RootState = ReturnType<typeof rootReducer>;
