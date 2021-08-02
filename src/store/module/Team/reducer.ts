import { produce } from 'immer';
import { TeamTypes } from './types';
import { ITeamState } from './state';
import { IActionsTeam } from './interfaces/IActionTeam';

const INITIAL_STATE: ITeamState = {
    team: {
        id: 0,
        country: '',
        founded: 0,
        logo: '',
        name: '',
    },
    venue: {
        id: 0,
        address: '',
        capacity: 0,
        city: '',
        image: '',
        name: '',
    },
    loading: false,
};

export default function League(state = INITIAL_STATE, action: IActionsTeam) {
    return produce(state, draft => {
        switch (action.type) {
            case TeamTypes.GET_TEAM_REQUEST: {
                draft.loading = true;
                break;
            }

            case TeamTypes.GET_TEAM_SUCCESS: {
                draft.loading = false;
                draft.team = action.payload.team;
                draft.venue = action.payload.venue;
                break;
            }

            default:
                break;
        }
    });
}
