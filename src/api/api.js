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