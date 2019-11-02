import React, { useState , useEffect} from "react"
import { createHashHistory } from 'history'; // hash路由
import Cookies from 'js-cookie'
import logo from '@/images/logo.png';
import { Button, Toast } from 'antd-mobile';

const history = createHashHistory();
function Choice({onClick}) {
    const [aggree,setAggree] = useState(false)
    const handelChange = () => {
       setAggree(!aggree)
    }
    useEffect(() => {
        console.log(aggree)
    },[aggree])
    const mobileLanding = () => {
        if(aggree) {
            onClick('2')
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
                <img src={logo} alt="" />
            </div>
            <div className="login-bottom">
                <div>
                    <Button className="login-button scale-1px" onClick={mobileLanding}>手机号登陆</Button>
                    <Button className="login-button scale-1px" onClick={goHome}>立即体验</Button>
                </div>
                <div className="login-icon-wrap">
                    <span className="login-icon iconfont icon-weixin"></span>
                    <span className="login-icon iconfont icon-qq1"></span>
                    <span className="login-icon iconfont icon-weibo"></span>
                    <span className="login-icon iconfont icon-weixin"></span>
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