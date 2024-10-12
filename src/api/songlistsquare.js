import axios from "@/api/http";
/**
 * 歌单广场 获取精品歌单
 * @param {Number} id 歌单id
 */ 
 export function getPlaylistSquare(params){
    return axios({
        url:'/top/playlist/highquality',
        method:'get',
        params
    })
 }

/**
 * 歌单广场 精品歌单标签列表
 * @param {Number} id 歌单id
 */ 
 export function getPlaylistLabel(){
    return axios({
        url:'/playlist/highquality/tags',
        method:'get',
    })
 }
