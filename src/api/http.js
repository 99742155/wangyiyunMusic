import axios from 'axios';

const service = axios.create({
    /* baseURL: '/api', */
    baseURL: 'https://apis.netstart.cn/music',
    timeout: 30000,
    headers: {
        'content-Type': 'application/json;charset=utf-8',
    }
})

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log('垃圾接口又报错,axios中request报错', error);
        Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log('垃圾接口又报错,axios中response报错', error);
        Promise.reject(error);
    }
)
export default service;