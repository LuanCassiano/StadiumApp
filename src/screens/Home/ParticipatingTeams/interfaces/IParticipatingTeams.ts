import { ITeam } from '../../../../interfaces/ITeam';

export interface IParticipatingTeams {
    teamsLeague: ITeam[];
    onItemPress(item: number): void;
}
