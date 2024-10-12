import request from './http';

export function getBanner() {
    return request({
        url: '/banner',
        methdod: 'get',
        params: {
            'type': 2
        }
    })
}

export function getHomepage() {
    return request({
        url: '/homepage/block/page',
        method:'get'
    })
}