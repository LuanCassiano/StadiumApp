export interface IApiResponse<T = undefined> {
    get: string;
    errors: [];
    results: number;
    response: T;
}
