import { ITeam } from './ITeam';

interface IStandingsAll {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
        for: number;
        against: number;
    };
}

export interface IStandings {
    rank: number;
    team: ITeam;
    points: number;
    all: IStandingsAll;
}

export interface ILeagueStandings {
    league: {
        id: number;
        name: string;
        logo: string;
        standings: any[];
    };
}
