import { IStandings } from '../interfaces/IStandings';
import { ITeam } from '../interfaces/ITeam';

export function getTeamsParticipating(value: any) {
    const newArr = value.standings
        .flat()
        .map((item: IStandings) => item.team)
        .reduce((acc: IStandings, current: ITeam) => {
            return { ...acc, [current.name]: current };
        }, {});

    const result = Object.keys(newArr).map(key => newArr[key]);

    return result;
}
