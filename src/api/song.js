import request from "./http";

/**
 * @param {Number} id
 */
export function getPlaylistDetail(params){
    return request({
        url:"/playlist/detail",
        method:"get",
        params
    })
}
