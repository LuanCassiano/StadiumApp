import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
});

api.interceptors.request.use(async config => {
    const headers = {
        'x-rapidapi-key': '655aca4379mshb754c7e92f6c9e6p161ce2jsnfcf3f0858f35',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    };

    return { ...config, headers };
});

export default api;
