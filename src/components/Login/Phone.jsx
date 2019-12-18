import React from "react"
import { connect } from "react-redux"
import { Button,InputItem,Toast } from 'antd-mobile';
import { checkPhone } from "@/api/api.js"
const Phone = ({ userPhone,handelChange,handelChangeToggle,getFieldProps }) => {
    const goCaptcha = () => {
        var newPserPhone = userPhone.replace(/\s+/g, "");
        if(newPserPhone.length !== 11) {
            Toast.info('请填写正确的号码', 1);
            return false;
        }
        checkPhone(newPserPhone).then((data) => {
            if(data.code === 200) {
                if(data.hasPassword) {
                    handelChangeToggle(5)
                }else {
                    handelChangeToggle(3)
                }
            }
        })
    }
    return (
        <>
            <div className="login-tip">
                未创建手机号登陆后将自动创建账号
            </div>
            <div className="login-phone-num">
                <InputItem
                    {...getFieldProps('phone')}
                    type="phone"
                    name="phone"
                    value={userPhone}
                    placeholder="请输入手机号码"
                    onChange={(v) => handelChange(v)} >+86</InputItem>
            </div>
            <div>
                <Button className="login-next" onClick={() => goCaptcha()}>下一步</Button>
            </div>
        </>
    )
}
function mapStateToProps({user}) {
    return {
        userPhone : user.userPhone
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handelChange(userPhone) {
            dispatch({
                type : "ADD_USER_PHONE",
                payload : {
                    userPhone
                }
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)((Phone))