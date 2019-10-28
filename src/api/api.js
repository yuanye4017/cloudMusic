import { apiAxios } from "./server";

export const BASE_URL = 'api'

export function getCaptcha(phone) {
    let url = `${BASE_URL}/captcha/sent?phone=${phone}`;
    return apiAxios("GET", url)
}