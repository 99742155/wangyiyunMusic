import request from "./http";

/**
 * 请求验证码
 * @param {Number} phone 手机号码
 */
export function getCaptcha(params){
    return request({
        url:"/captcha/sent",
        method:"get",
        params
    })
}


/**
 * 验证验证码
 * @param {Number} phone 手机号码
 * @param {Number} captcha 验证码
 */
 export function getCaptchaVerify(params){
    return request({
        url:"/captcha/verify",
        method:"get",
        params
    })
}

/**
 * 手机密码登录
 * @param {Number} phone 手机号码
 * @param {Number} password 密码
 */
 export function getLoginCellphone(params){
    return request({
        url:"/login/cellphone",
        method:"post",
        params
    })
}
/**
 * 登出
 * 
 */
export function logout(params){
    return request({
        url:"/logout",
        method:"get",
        params
    })
}

export function getLoginstutas(params){
    return request({
        url:"/login/status",
        method:"get",
        params
    })
}