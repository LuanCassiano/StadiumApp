import { ITeam } from '../../../interfaces/ITeam';
import { IVenue } from '../../../interfaces/IVenue';

export interface ITeamState {
    readonly team: ITeam;
    readonly venue: IVenue;
    readonly loading: boolean;
}
