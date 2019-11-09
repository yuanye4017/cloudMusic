import React, { useState, useCallback, useEffect } from 'react';
import { createForm } from 'rc-form';
import asyncComponent from '@/utils/asyncComponent';
import "./login.scss"
const Choice = asyncComponent(() => import("@/components/Login/Choice"));
const Phone = asyncComponent(() => import("@/components/Login/Phone"));
const Captcha = asyncComponent(() => import("@/components/Login/Captcha"));
const PassWord = asyncComponent(() => import("@/components/Login/PassWord"));

function Login({form,history}) {
    const [toggle, setToggle] = useState(1)
    const [title,setTitle] = useState("手机号登陆")

    const handelChangeToggle = useCallback((num) => {
        setToggle(num/1)
    }, [setToggle])

    const goBack = () => {
        if(toggle === 5) {
            setToggle(2)
        }else {
            setToggle(toggle -1)
        }
    }

    const { getFieldProps } = form
    useEffect(() => {
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
    return (
        <div className="login-body-wrap" style={{ background: toggle === 1 ? '#db2c1f' : '#fff' }}>
            {toggle === 1 ? <Choice handelChangeToggle={handelChangeToggle} /> : null}
            <div className="login-phone" style={{ display: toggle === 1 ? 'none' : 'block' }}>
                <h2 onClick={() => goBack()}><span className="iconfont icon-flow"></span>{title}</h2>
                {
                    toggle === 2 ? <Phone getFieldProps={getFieldProps} handelChangeToggle={handelChangeToggle} /> : null
                }
                {
                    toggle === 3 ? <Captcha onClick={handelChangeToggle} getFieldProps={getFieldProps}/> : null
                }
                {
                    toggle === 4 || toggle === 5 ? <PassWord history={history} getFieldProps={getFieldProps} /> : null
                }
            </div>
        </div>
    )
}
export default createForm()(Login)