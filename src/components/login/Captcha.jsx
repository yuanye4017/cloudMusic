import React, { useState , useRef , useEffect } from "react"
import { createForm } from 'rc-form';
import { InputItem } from 'antd-mobile';
import { verification } from "@/api/api.js"

function Captcha({ userPhone , form , captcha , setCaptcha ,onClick}) {
    const { getFieldProps } = form
    const [timer,setTimer] = useState(5)
    const [disabledInput,setDisabledInput] = useState(0)
    const textInput = useRef()
    const onKeyup = (e,index) => {     
        if(e.keyCode === 8 && index/1 > 0) {
            setCaptcha(index/1 - 1,'')
            setDisabledInput(index/1 - 1)
        } 
    }
    const handelChange = (val,index) => {
        if (!val) {
            return false
        }
        setCaptcha(index,val)
        if(index/1 <= 2) {
            setDisabledInput(index/1 + 1)
        }else {
            goVerification(captcha)
        }
    }
    const goVerification = (captcha) => {
        var newUserPhone = userPhone.replace(/\s+/g, "");
        var newCaptcha = captcha.join("");
        onClick('4')
        verification(newCaptcha, newUserPhone).then((data) => {
            if (data.code === 200) {
                onClick('4')
            }
        })
    }
    useEffect(() => {
        if(disabledInput >= 0){
            textInput.current.childNodes[disabledInput].getElementsByTagName('input')[0].focus()
        }
        setTimeout(() => {
            setTimer(timer - 1);
            if(timer === 0) {
                setTimer('炸了吧');
            }
        }, 1000);
    },[disabledInput,timer])
    return (
        <>
            <div className="verification-code">
                <p>验证码已发送至</p>
                <p style={{ float: "left" }}>+86 {userPhone.substring(0, 3)}****{userPhone.substring(9)}</p>
                <p style={{ float: "right" }}>{timer}s</p>
            </div>
            <div className="verification-code-input" ref={textInput}>
                {
                    captcha.map((value, index) => {
                        return (
                            <div className="code" key={index}>
                                <InputItem
                                    {...getFieldProps('number')} 
                                    type="number"
                                    className="inputEl"
                                    disabled={disabledInput === index/1 ? false : true}
                                    value={captcha[index]}
                                    onKeyUp={e => onKeyup(e, index)}
                                    onChange={(val) => handelChange(val, index)} ></InputItem>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default createForm()(Captcha)