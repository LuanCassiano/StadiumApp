import { combineReducers } from 'redux';

import league from './League/reducer';

export const rootReducer = combineReducers({
    league,
});

export type RootState = ReturnType<typeof rootReducer>;
