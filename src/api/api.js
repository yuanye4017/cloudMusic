import { apiAxios } from "./server";

export const BASE_URL = 'api'

export function getCaptcha(phone) {
    let url = `${BASE_URL}/captcha/sent?phone=${phone}`;
    return apiAxios("GET", url)
}
export function verification(phone,code) {
    let url = `${BASE_URL}/captcha/sent?phone=${phone}&captcha=${code}`;
    return apiAxios("GET", url)
}
export function checkPhone(phone) {
    let url = `${BASE_URL}/cellphone/existence/check?phone=${phone}`;
    return apiAxios("GET", url)
}
export function checkPassWord(phone,pwd) {
    let url = `${BASE_URL}/login/cellphone?phone=${phone}&password=${pwd}`;
    return apiAxios("POST", url)
}
export function getBanner() {
    let url = `${BASE_URL}/banner?type=2`;
    return apiAxios("GET", url)
}
export function getPlaylist() {
    let url = `${BASE_URL}/personalized?limit=6`;
    return apiAxios("GET", url)
}
export function getNewest() {
    let url = `${BASE_URL}/album/newest`;
    return apiAxios("GET", url)
}
export function getNewSong() {
    let url = `${BASE_URL}/top/song`;
    return apiAxios("GET", url)
}