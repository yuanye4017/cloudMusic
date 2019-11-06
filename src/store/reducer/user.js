import userInit from "../state/user"
export default {
    getUser(state=userInit,action) {
        var value = JSON.stringify(state)
        var newValue = JSON.parse(value)
        switch(action.type) {
            case "ADD_USER_PHONE" :
                newValue.userPhone = action.payload.userPhone;
                break;
            case "ADD_USER_CAPTCHA" :
                newValue.captcha[action.payload.index] = action.payload.captcha;
                break;
            default : 
                return newValue
        }
        return newValue
    }
}