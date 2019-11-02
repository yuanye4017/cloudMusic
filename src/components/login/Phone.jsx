import React from "react"
import { createForm } from 'rc-form';
import { Button,InputItem,Toast } from 'antd-mobile';
import { getCaptcha,checkPhone } from "@/api/api.js"
const Phone = ({ userPhone,onClick,onChange,form }) => {
    const { getFieldProps } = form
    const goCaptcha = () => {
        var newPserPhone = userPhone.replace(/\s+/g, "");
        if(newPserPhone.length !== 11) {
            Toast.info('请填写正确的号码', 1);
            return false;
        }
        checkUserByPhone(newPserPhone).then((data) => {
            console.log(data)
        })
        // getCaptcha.then((data) => {
        //     if(data.code === 200) {
        //         onClick('3')
        //     }
        // })
    }
    const checkUserByPhone = (phone) => {
        return checkPhone(phone)
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
                    onChange={(v) => onChange(v)} >+86</InputItem>
            </div>
            <div>
                <Button className="login-button" onClick={() => goCaptcha()}>下一步</Button>
            </div>
        </>  
    )
}

export default createForm()(Phone)