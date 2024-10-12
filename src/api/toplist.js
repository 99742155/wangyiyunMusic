import request from "./http";

/**
 * @param {Number} id
 */
export function getTopList(params){
    return request({
        url:"/toplist",
        method:"get",
        params
    })
}