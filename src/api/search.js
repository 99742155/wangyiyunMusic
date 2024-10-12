import request from "./http";

/**
 * @param {Number} id
 */
export function getSearch(params){
    return request({
        url:"/search/suggest",
        method:"get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function getSearchResult(params){
    return request({
        url:"/cloudsearch",
        method:"get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function getSearchHot(params){
    return request({
        url:"/search/hot/detail",
        method:"get",
        params
    })
}

/**
 * @param {Number} id
 */
 export function getTopicHot(params){
    return request({
        url:"/hot/topic",
        method:"get",
        params
    })
}