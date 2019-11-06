import React, { useState } from "react"
import { createHashHistory } from 'history'; // hash路由
import Cookies from 'js-cookie'
import logo from '@/images/login_imgs/music.gif';
import wx from '@/images/login_imgs/wx.png'
import qq from '@/images/login_imgs/qq.png'
import wb from '@/images/login_imgs/wb.png'
import wy from '@/images/login_imgs/wy.png'
import { Button, Toast } from 'antd-mobile';

const history = createHashHistory();
function Choice({handelChangeToggle}) {
    const [aggree,setAggree] = useState(false)
    const handelChange = () => {
       setAggree(!aggree)
    }
    const mobileLanding = () => {
        if(aggree) {
            handelChangeToggle('2')
        }else {
            Toast.info('请勾选同意 《用户隐私》《隐私政策》《儿童隐私政策》', 1);
        }
    }
    const goHome = () => {
        Cookies.set('MUSIC_U', 'tsourist');
        history.push('/')
    }
    return (
        <div>
            <div className="login-logo-img">
                <img src={logo} alt="音乐的力量" />
            </div>
            <div className="login-bottom">
                <div>
                    <Button className="login-button scale-1px" onClick={mobileLanding}>手机号登陆</Button>
                    <Button className="login-button scale-1px" onClick={goHome}>立即体验</Button>
                </div>
                <div className="login-icon-wrap">
                    <img src={wx} alt="微信" />
                    <img src={qq} alt="QQ" />
                    <img src={wb} alt="微博" />
                    <img src={wy} alt="网易" />
                </div>
                <div className="login-agree">
                    <input type="checkbox" id="myCheck" style={{ "display": "none" }} onChange={handelChange} />
                    <label htmlFor="myCheck"></label>
                    <p>同意 <span>《用户隐私》</span><span>《隐私政策》</span><span>《儿童隐私政策》</span></p>
                </div>
            </div>
        </div>
    )
}

export default Choice