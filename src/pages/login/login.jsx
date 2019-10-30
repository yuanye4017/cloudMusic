import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { is, fromJS } from 'immutable';
import logo from '@/images/logo.png';
import { createHashHistory } from 'history'; // hash路由
import "./login.scss"
import { Button , Toast , InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import { getCaptcha , verification } from "@/api/api.js"

const history = createHashHistory();
@mixin({padStr})
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAggree : [],
            isToggleOn : true,
            isSendOut : true,
            phone : '15321567132',
            loadingTime : 100,
            timer : 60,
            phoneCode : ['','','','']
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    handelChange = e => {
        var value = e.target.value;
        if(e.target.type === "checkbox") {
            var val = this.state.isAggree;
            var index = val.indexOf(e.target.value);
            index > -1 ? val.splice(index,1) : val.push(e.target.value)
        }else {
            this.setState({
                [e.target.name] : value
            })  
        }
    };
    handelChangeCode = (value,num) => {
        var phoneCode = this.state.phoneCode;  
        phoneCode[num] = value;  
        this.setState((prevState) =>{
            delete prevState.phoneCode;
            return prevState;
        })
        this.setState({
            phoneCode 
        })
        switch(num) {
            case "0" : this.inputRefTwo.focus();break;
            case "1" : this.inputRefThree.focus();break;
            case "2" : this.inputRefFour.focus();break;
            case "3" : this.verification();break;
        }  
    }
    verification() { // 校检验证码
        var phone = this.state.phone;
        phone = phone.replace(/\s+/g,""); 
        var captcha = this.state.phoneCode.join("");
        verification(phone,captcha).then((data) => {
            if(data.code === 200) {
                localStorage.__config_center_token = this.setState.phone;
                history.push('/');
            }
        })
    }
    handelChangeVal = value => {
        this.setState({
            phone : value
        }) 
    }
    login = e => { 
        var isAggree = this.state.isAggree;
        if(isAggree.length > 0) {
            this.setState({
                isToggleOn : !this.state.isToggleOn
            })
        }else {
            Toast.info('请勾选同意 《用户隐私》《隐私政策》《儿童隐私政策》', 1);
        }
    }
    goBack(type){
        if(type === '1') {
            this.setState({
                isToggleOn : !this.state.isToggleOn
            })
        }else {
            this.setState({
                isSendOut : !this.state.isSendOut
            })
        }   
    }
    register = () => {  
        const phone = this.state.phone
        phone = phone.replace(/\s+/g,"");       
        if(phone.length < 11) {
            Toast.info('请输入11位手机号码', 1);
        }else {
            getCaptcha(phone).then((data)=> {
                if(data.code === 200) {
                    this.setState({
                        loadingTime : 0,
                        isSendOut : ! this.state.isSendOut
                    })
                    this.inputRefOne.focus();
                }else {
                    console.log(data.msg)
                }
            })
        }
    }
    render() {
        const isToggleOn = this.state.isToggleOn;
        const isSendOut = this.state.isSendOut;
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-body-wrap" style={{background: isToggleOn ? '#de2e21' : '#fff'}}>
                <div style={{display: isToggleOn ? 'block' : 'none'}}>
                    <div className="login-logo-img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="login-bottom">
                        <div>
                            <Button className="login-button scale-1px" onClick={this.login}>手机号登陆</Button>
                            <Button className="login-button scale-1px">立即体验</Button>
                        </div>
                        <div className="login-icon-wrap">
                            <span className="login-icon iconfont icon-weixin"></span>
                            <span className="login-icon iconfont icon-qq1"></span>
                            <span className="login-icon iconfont icon-weibo"></span>
                            <span className="login-icon iconfont icon-weixin"></span>
                        </div>
                        <div className="login-agree">
                            <input type="checkbox" id="myCheck" style={{"display":"none"}} onChange={this.handelChange} value="off"/>
                            <label htmlFor="myCheck"></label>
                            <p>同意 <span>《用户隐私》</span><span>《隐私政策》</span><span>《儿童隐私政策》</span></p>
                        </div>
                    </div>
                </div>
                <div style={{display: isToggleOn ? 'none' : 'block'}}>
                    <div className="login-phone" style={{display: isSendOut ? 'none' : 'block'}}>
                        <h2 onClick={() => this.goBack('1')}><span className="iconfont icon-flow"></span>手机号登陆</h2>
                        <div className="login-tip">
                            未创建手机号登陆后将自动创建账号
                        </div>
                        <div className="login-phone-num">
                            <InputItem {...getFieldProps('phone')} type="phone" placeholder="请输入手机号码" onChange={this.handelChangeVal} name="phone" value={this.state.phone}>+86</InputItem>
                        </div>
                        <div>
                            <Button className="login-button" onClick={this.register}>下一步</Button>
                        </div>
                    </div>
                    <div className="verification-code login-phone" style={{display: isSendOut ? 'block' : 'none'}}>
                        <h2 onClick={() => this.goBack('2')}><span className="iconfont icon-flow"></span>手机号验证</h2>
                        <div style={{overflow:"hidden"}}>
                            <p className="verification-code-tip">验证码已发送至</p>
                            <p style={{float:"left"}}>+86 {this.state.phone.substring(0,3)}****{this.state.phone.substring(9)}</p>
                            <p style={{float:"right"}}>{this.state.timer}s</p>
                        </div>
                        <div className="verification-code-input">
                            <div className="code">
                                <InputItem 
                                    {...getFieldProps('number')} type="number" 
                                    ref={el => this.inputRefOne = el}
                                    value={this.state.phoneCode[0]} 
                                    onChange={(e) => this.handelChangeCode(e,'0')} ></InputItem>
                            </div>
                            <div className="code">
                                <InputItem 
                                    {...getFieldProps('number')} type="number" 
                                    ref={el => this.inputRefTwo = el}
                                    value={this.state.phoneCode[1]} 
                                    onChange={(e) => this.handelChangeCode(e,'1')} ></InputItem>
                            </div>
                            <div className="code">
                                <InputItem 
                                    {...getFieldProps('number')} type="number" 
                                    ref={el => this.inputRefThree = el}
                                    value={this.state.phoneCode[2]} 
                                    onChange={(e) => this.handelChangeCode(e,'2')} ></InputItem>
                            </div>
                            <div className="code">
                                <InputItem 
                                    {...getFieldProps('number')} type="number" 
                                    ref={el => this.inputRefFour = el}
                                    value={this.state.phoneCode[3]} 
                                    onChange={(e) => this.handelChangeCode(e,'3')} ></InputItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default createForm()(Login)