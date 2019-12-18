import React, { useState , useRef , useEffect } from "react"
import { connect } from "react-redux"
import { InputItem } from 'antd-mobile';
import { verification } from "@/api/api.js"

function Captcha({ userPhone, captcha ,changeCaptcha,handelChangeToggle,getFieldProps}) {
    const [timer,setTimer] = useState(60)
    const [disabledInput,setDisabledInput] = useState(0)
    const textInput = useRef()
    const onKeyup = (e,index) => {     
        if(e.keyCode === 8 && index/1 > 0) {
            changeCaptcha(index/1 - 1,'')
            setDisabledInput(index/1 - 1)
        } 
    }
    const handelChange = (val,index) => {
        if (!val) {
            return false
        }
        changeCaptcha(index,val)
        if(index/1 <= 2) {
            setDisabledInput(index/1 + 1)
        }else {
            goVerification(captcha)
        }
    }
    const goVerification = (captcha) => {
        var newUserPhone = userPhone.replace(/\s+/g, "");
        var newCaptcha = captcha.join("");
        verification(newCaptcha, newUserPhone).then((data) => {
            if (data.code === 200) {
                handelChangeToggle('4')
            }
        })
    }
    useEffect(() => {
        if(disabledInput >= 0){
            textInput.current.childNodes[disabledInput].getElementsByTagName('input')[0].focus()
        }    
    },[disabledInput])
    
    useEffect(() => {
        const time = setTimeout(() => {
            setTimer(timer => timer - 1);
            if(timer === 0) {
                setTimer(0);
            }
        }, 1000);
        return () => {
          clearTimeout(time); 
        };
    },[]);

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
                                    value={value}
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
function mapStateToProps({user}) {
    return {
        userPhone : user.userPhone,
        captcha : user.captcha
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeCaptcha(index,captcha) {
            dispatch({
                type : "ADD_USER_CAPTCHA",
                payload : {
                    index,
                    captcha
                }
            })
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)((Captcha))