import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { is, fromJS } from 'immutable';
import { createHashHistory } from 'history'; // hash路由
import { connect } from "react-redux"
import { createForm } from 'rc-form';
import { Button, Toast, InputItem } from 'antd-mobile';
import logo from '@/images/logo.png';
import "./login.scss"
import { getCaptcha, verification } from "@/api/api.js"

const history = createHashHistory();
@mixin({ padStr })
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAggree: [],
            isToggleOn: true,
            isSendOut: false,
            loadingTime: 100,
            timer: 60,
            disabledInput : 0 
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }
    handelChange = e => { // 是否同意
        var value = e.target.value;
        if (e.target.type === "checkbox") {
            var val = this.state.isAggree;
            var index = val.indexOf(e.target.value);
            index > -1 ? val.splice(index, 1) : val.push(e.target.value)
        } else {
            this.setState({
                [e.target.name]: value
            })
        }
    }
    handelChangeVal = value => { // 手机号码更改
        this.props.addUserPhone(value)
    }
    goBack(type) { // 返回上一页
        if (type === '1') {
            this.setState({
                isToggleOn: !this.state.isToggleOn
            })
        } else {
            this.setState({
                isSendOut: !this.state.isSendOut
            })
        }
    }
    mobileLanding = e => { // 手机号登陆
        var isAggree = this.state.isAggree;
        if (isAggree.length > 0) {
            this.setState({
                isToggleOn: !this.state.isToggleOn
            })
        } else {
            Toast.info('请勾选同意 《用户隐私》《隐私政策》《儿童隐私政策》', 1);
        }
    }
    nextStep = () => {  // 下一步
        let phone = this.props.userPhone.replace(/\s+/g, "");
        if (phone.length < 11) {
            Toast.info('请输入11位手机号码', 1);
        } else {
            getCaptcha(phone).then((data)=> {
                if(data.code === 200) {
                    this.setState({
                        isSendOut : ! this.state.isSendOut
                    },() => {
                        this.refs["inputRef_0"].focus();
                    }) 
                }else {
                    console.log(data.msg)
                }
            })
        }
    }
    verification() { // 校检验证码
        var phone = this.props.userPhone;
        phone = phone.replace(/\s+/g, "");
        var captcha = this.props.captcha.join("");
        verification(phone, captcha).then((data) => {
            if (data.code === 200) {
                localStorage.__config_center_token = this.state.phone;
                history.push('/');
            }
        })
    }
    handelChangeCode = (value, num) => { // 填写验证码
        if (!value) {
            return false
        }
        this.props.addUserCaptcha(value,num)
        if(num <= 2) {
            var inputRef = "inputRef_" + (num + 1)
            this.setState({
                disabledInput : num + 1
            },() => {
                this.refs[inputRef].focus()
            })  
        }else {
            this.verification()
        }
    }
    handelKeyup = (e , num) => { // 向后删除
        if(e.keyCode === 8 && num/1 > 0) {
            var inputRef = "inputRef_" + (num/1 - 1)
            this.props.addUserCaptcha('',num/1 - 1)
            this.setState({
                disabledInput : num - 1
            },() => {
                this.refs[inputRef].focus();
            })    
        }  
    }

    render() {
        const isToggleOn = this.state.isToggleOn;
        const isSendOut = this.state.isSendOut;
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-body-wrap" style={{ background: isToggleOn ? '#de2e21' : '#fff' }}>
                <div style={{ display: isToggleOn ? 'block' : 'none' }}>
                    <div className="login-logo-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="login-bottom">
                        <div>
                            <Button className="login-button scale-1px" onClick={this.mobileLanding}>手机号登陆</Button>
                            <Button className="login-button scale-1px">立即体验</Button>
                        </div>
                        <div className="login-icon-wrap">
                            <span className="login-icon iconfont icon-weixin"></span>
                            <span className="login-icon iconfont icon-qq1"></span>
                            <span className="login-icon iconfont icon-weibo"></span>
                            <span className="login-icon iconfont icon-weixin"></span>
                        </div>
                        <div className="login-agree">
                            <input type="checkbox" id="myCheck" style={{ "display": "none" }} onChange={this.handelChange} value="off" />
                            <label htmlFor="myCheck"></label>
                            <p>同意 <span>《用户隐私》</span><span>《隐私政策》</span><span>《儿童隐私政策》</span></p>
                        </div>
                    </div>
                </div>
                <div style={{ display: isToggleOn ? 'none' : 'block' }}>
                    <div className="login-phone" style={{ display: isSendOut ? 'none' : 'block' }}>
                        <h2 onClick={() => this.goBack('1')}><span className="iconfont icon-flow"></span>手机号登陆</h2>
                        <div className="login-tip">
                            未创建手机号登陆后将自动创建账号
                        </div>
                        <div className="login-phone-num">
                            <InputItem {...getFieldProps('phone')} type="phone" placeholder="请输入手机号码" onChange={this.handelChangeVal} name="phone" value={this.props.userPhone}>+86</InputItem>
                        </div>
                        <div>
                            <Button className="login-button" onClick={this.nextStep}>下一步</Button>
                        </div>
                    </div>
                    <div className="verification-code login-phone" style={{ display: isSendOut ? 'block' : 'none' }}>
                        <h2 onClick={() => this.goBack('2')}><span className="iconfont icon-flow"></span>手机号验证</h2>
                        <div style={{ overflow: "hidden" }}>
                            <p className="verification-code-tip">验证码已发送至</p>
                            <p style={{ float: "left" }}>+86 {this.props.userPhone.substring(0, 3)}****{this.props.userPhone.substring(9)}</p>
                            <p style={{ float: "right" }}>{this.state.timer}s</p>
                        </div>
                        <div className="verification-code-input">
                            {
                                this.props.captcha.map((value,index) => {
                                    return (
                                        <div className="code" key={index}>
                                            <InputItem 
                                                {...getFieldProps('number')} type="number"
                                                ref = {'inputRef_' + index}
                                                disabled = {this.state.disabledInput === index ? false : true}
                                                value={this.props.captcha[index]}
                                                onKeyUp={e => this.handelKeyup(e,index)}
                                                onChange={(e) => this.handelChangeCode(e, index)} ></InputItem>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        ...state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUserPhone(phone) {
            dispatch({
                type: "ADD_USER_PHONE",
                payload: {
                    phone
                }
            })
        },
        addUserCaptcha(captcha,num) {
            dispatch({
                type: "ADD_USER_CAPTCHA",
                payload: {
                    captcha,
                    num
  
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(createForm()(Login))