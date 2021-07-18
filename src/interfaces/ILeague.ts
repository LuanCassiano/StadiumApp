interface ISeason {
    year: number;
    start: string;
    end: string;
}

export interface ILeague {
    league: {
        id: number;
        name: string;
        type: string;
        logo: string;
    };
    seasons: ISeason[];
}
