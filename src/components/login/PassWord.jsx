import React ,{useState} from "react"
import { createForm } from 'rc-form';
import { Button,InputItem } from 'antd-mobile';
const PassWord = ({ userPhone, captcha, form }) => {
    const { getFieldProps } = form
    const {password,setPassword} = useState('')

    const confirmID = () => {
        
    }
    return (
        <>
            <div className="login-phone-num">
                <InputItem 
                    {...getFieldProps('password')} 
                    type="password" 
                    name="password"
                    value={password} 
                    placeholder="请输入密码" 
                    onChange={(v) => setPassword(v)} ></InputItem>
            </div>
            <div>
                <Button className="login-button" onClick={() => confirmID()}>确认密码</Button>
            </div>
        </>  
    )
}

export default createForm()(PassWord)