export interface IApiResponse<T> {
    get: string;
    errors: [];
    results: number;
    response: T;
}
