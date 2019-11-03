import React ,{useState} from "react"
import { createForm } from 'rc-form';
import { createHashHistory } from 'history'; // hash路由
import { Button,InputItem } from 'antd-mobile';
import { checkPassWord } from "@/api/api.js"

const history = createHashHistory();
const PassWord = ({ userPhone, captcha, form }) => {
    const { getFieldProps } = form
    const [password,setPassword] = useState('')

    const confirmID = () => {
        var newPhone = userPhone.replace(/\s+/g, "");
        checkPassWord(newPhone,password).then((data) => {
            if(data.code === 200) {
                history.push("/")
            }
        })
    }
    return (
        <>
            <div className="login-phone-num">
                <InputItem 
                    {...getFieldProps('password')} 
                    type="password" 
                    name="password"
                    maxLength={20}
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