import userInit from "../state/user"
export default {
    getUser(state=userInit,action) {
        var value = JSON.stringify(state)
        var newValue = JSON.parse(value)
        switch(action.type) {
            case "ADD_USER_PHONE" :
                newValue.userPhone = action.payload.phone;
                break;
            case "ADD_USER_CAPTCHA" :
                newValue.captcha[action.payload.num] = action.payload.captcha;
                break;

        }
        return newValue
    }
}