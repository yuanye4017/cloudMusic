import React, { useState, useCallback, useEffect } from 'react';
// import { createHashHistory } from 'history'; // hash路由

import Choice from "@/components/login/Choice"
import Phone from "@/components/login/Phone"
import Captcha from "@/components/login/Captcha"
import PassWord from "@/components/login/PassWord"
import "./login.scss"

// import { getCaptcha, verification } from "@/api/api.js"
function Login() {
    const [toggle, setToggle] = useState(1)
    const [userPhone,setUserPhone] = useState("")
    const [title,setTitle] = useState("手机号登陆")
    const [captcha,setCaptcha] = useState(['','','',''])

    useEffect(() => {
        // console.log(111, toggle)
        switch (toggle) {
            case 3:
                setTitle("验证码")
                break;
            case 4:
                setTitle("密码登陆")
                break;
            default:
                break;
        }
    },[toggle])
    const handelChangeToggle = useCallback((num) => {
        setToggle(num/1)
    }, [setToggle])
    const handleChangePhone = useCallback((value) => {
        setUserPhone(value)
    },[])
    const handelChangeCaptcha = useCallback((index,value) => {
        captcha[index] = value;
        setCaptcha([...captcha])
    },[captcha])

    const goBack = () => {
        setToggle(toggle -1)
    }
    return (
        <div className="login-body-wrap" style={{ background: toggle === 1 ? '#de2e21' : '#fff' }}>
            {toggle === 1 ? <Choice onClick={handelChangeToggle} /> : null}
            <div className="login-phone" style={{ display: toggle === 1 ? 'none' : 'block' }}>
                <h2 onClick={() => goBack()}><span className="iconfont icon-flow"></span>{title}</h2>
                {
                    toggle === 2 ? <Phone userPhone={userPhone} onChange={handleChangePhone} onClick={handelChangeToggle} /> : null
                }
                {
                    toggle === 3 ? 
                        <Captcha 
                            userPhone={userPhone} 
                            onClick={handelChangeToggle} 
                            captcha={captcha} 
                            setCaptcha={handelChangeCaptcha} /> : null
                }
                {
                    toggle === 4 ? <PassWord captcha={captcha} userPhone={userPhone} /> : null
                }
            </div>
        </div>
    )
}
export default Login