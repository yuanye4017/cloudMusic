import { apiAxios } from "./server";
export const BASE_URL = 'api'

/*发送验证码*/
export function getCaptcha(phone) {
    let url = `${BASE_URL}/captcha/sent?phone=${phone}`;
    return apiAxios("GET", url)
}

/*验证验证码*/
export function verification(phone,code) {
    let url = `${BASE_URL}/captcha/sent?phone=${phone}&captcha=${code}`;
    return apiAxios("GET", url)
}

/*检测手机号码是否已注册*/
export function checkPhone(phone) {
    let url = `${BASE_URL}/cellphone/existence/check?phone=${phone}`;
    return apiAxios("GET", url)
}

/*手机登录*/
export function checkPassWord(phone,pwd) {
    let url = `${BASE_URL}/login/cellphone?phone=${phone}&password=${pwd}`;
    return apiAxios("POST", url)
}

/*banner*/
export function getBanner() {
    let url = `${BASE_URL}/banner?type=2`;
    return apiAxios("GET", url)
}

/*推荐歌单*/
export function getPlaylist() {
    let url = `${BASE_URL}/personalized?limit=6`;
    return apiAxios("GET", url)
}

/*最新专辑*/
export function getNewest() {
    let url = `${BASE_URL}/album/newest`;
    return apiAxios("GET", url)
}

/*新歌速递*/
export function getNewSong() {
    let url = `${BASE_URL}/top/song?type=0`;
    return apiAxios("GET", url)
}