import request from "./http";

/**
 * @param {Number} ids
 */
export function getsongDetail(params) {
    return request({
        url: "/song/detail",
        method: "get",
        params
    })
}

/**
 * @param {Number} id
 */
export function getsongUrl(params) {
    return request({
        url: "/song/url",
        method: "get",
        params
    })
}

/**
 * @param {Number} id
 */
export function getSongLyrics(params) {
    return request({
        url: "/lyric",
        method: "get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function getSongComment(params) {
    return request({
        url: "/comment/music",
        method: "get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function SentSongComment(params) {
    return request({
        url: "/comment",
        method: "get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function like(params) {
    return request({
        url: "/comment/like",
        method: "get",
        params
    })
}
/**
 * @param {Number} id
 */
 export function likeSong(params) {
    return request({
        url: "/like",
        method: "get",
        params
    })
}