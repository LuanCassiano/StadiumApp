import { produce } from 'immer';
import { LeagueTypes } from './types';
import { ILeagueState } from './state';
import { IActionsLeague } from './interfaces/IActionLeague';

const INITIAL_STATE: ILeagueState = {
    data: [],
    loading: false,
};

export default function League(state = INITIAL_STATE, action: IActionsLeague) {
    return produce(state, draft => {
        switch (action.type) {
            case LeagueTypes.GET_LEAGUES_REQUEST: {
                draft.loading = true;
                break;
            }

            case LeagueTypes.GET_LEAGUES_SUCCESS: {
                draft.loading = false;
                draft.data = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
