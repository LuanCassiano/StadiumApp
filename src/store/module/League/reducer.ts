import { produce } from 'immer';
import { LeagueTypes } from './types';
import { ILeagueState } from './state';
import { IActionsLeague } from './interfaces/IActionLeague';

const INITIAL_STATE: ILeagueState = {
    data: [],
    league: {
        id: 0,
        logo: '',
        name: '',
        type: '',
    },
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

            case LeagueTypes.GET_LEAGUE_BY_ID_REQUEST: {
                draft.loading = true;
                break;
            }

            case LeagueTypes.GET_LEAGUE_BY_ID_SUCCESS: {
                draft.loading = false;
                draft.league = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
