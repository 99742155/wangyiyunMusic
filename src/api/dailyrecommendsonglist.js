import request from "./http";

/**
 * @param {Number} ids
 */
export function getdailyRecommendSongList(params) {
    return request({
        url: "/recommend/songs",
        method: "get",
        params
    })
}
