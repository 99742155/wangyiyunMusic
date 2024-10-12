import request from "./http";

/**
 * @param {Number} id
 */
export function getUserInfo(params) {
    return request({
        url: "/user/account",
        method: "get",
        params
    })
}
/**
 * @param {Number} uid
 */
export function getUserDetail(params) {
    return request({
        url: "/user/detail",
        method: "get",
        params
    })
}

/**
 *@param {Number} uid
 **/
export function getUserPlaylist(params) {
    return request({
        url: '/user/playlist',
        method: 'get',
        params
    })
}
/**
 *@param {Number} uid
 **/
export function getUserSubcount(params) {
    return request({
        url: '/user/subcount',
        method: 'get',
        params
    })
}

