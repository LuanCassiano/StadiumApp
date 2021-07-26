import { produce } from 'immer';
import { StandingsTypes } from './types';
import { IStandingsState } from './state';
import { IActionsStandings } from './interfaces/IActionStandings';

const INITIAL_STATE: IStandingsState = {
    data: [],
    teamsLeague: [],
    loading: false,
};

export default function Standings(
    state = INITIAL_STATE,
    action: IActionsStandings,
) {
    return produce(state, draft => {
        switch (action.type) {
            case StandingsTypes.GET_STANDINGS_REQUEST: {
                draft.loading = true;
                break;
            }

            case StandingsTypes.GET_STANDINGS_SUCCESS: {
                draft.loading = false;
                draft.data = action.payload;
                break;
            }

            case StandingsTypes.GET_TEAMS_LEAGUE_SUCESS: {
                draft.loading = false;
                draft.teamsLeague = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
