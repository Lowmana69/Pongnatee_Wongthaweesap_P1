import Axios from 'axios';

const server = !process.env.NODE_ENV || process.env.NODE_ENV == 'development' ?
    'http://localhost:3000' : '??????';

export const remoteAxios = Axios.create({
    baseURL: server
});