import React from "react";
import { Flex } from 'antd-mobile';
import Cookies from 'js-cookie'
import "./index.scss"
import Header from "../Header"
function Sidebar({history}) {
    const signOut = () => {
        Cookies.remove('MUSIC_U');
        history.push('/login')
    }
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-header-portrait">
                <div className="header-portrait">
                    <span>上传头像</span>
                </div>
            </div>
            <div className="sidebar-header-name">
                <Header
                    style={{ height: '.5rem' }}
                    left={[<span className="sidebar-header-left">骑驴上高速</span>]}
                    right={[<span className="sidebar-header-right">签到</span>]}>
                </Header>
            </div>
            <div className="sidebar-adv">
                <div className="sidebar-adv-left">
                    <div>开通黑胶VIP</div>
                    <div>新客仅需5元</div>
                </div>
                <div className="sidebar-adv-right">
                    黑胶新客首月5元
                </div>
            </div>
            <div className="sidebar-list">
                <Flex className="sidebar-list-navTag" justify="between">
                    <Flex.Item>
                        <p className="iconfont icon-xin"></p>
                        <p className="navTag-title">我的消息</p>
                    </Flex.Item>
                    <Flex.Item>
                        <p className="iconfont icon-wode"></p>
                        <p className="navTag-title">我的好友</p>
                    </Flex.Item>
                    <Flex.Item>
                        <p className="iconfont icon-huatong"></p>
                        <p className="navTag-title">听歌识曲</p>
                    </Flex.Item>
                    <Flex.Item>
                        <p className="iconfont icon-pifugexinghuazhuti-xianxing"></p>
                        <p className="navTag-title">个性装扮</p>
                    </Flex.Item>
                </Flex>
            </div>
            <div className="sidebar-main-1">
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-huopiaotongxing"></span>, <span className="sidebar-main-title">演出</span>]}
                    right={[<span className="sidebar-main-right">落日飞车</span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-icon22fuzhi"></span>, <span className="sidebar-main-title">商城</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-icon-test"></span>, <span className="sidebar-main-title">附近的人</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-youxi"></span>, <span className="sidebar-main-title">游戏推荐</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-cailing"></span>, <span className="sidebar-main-title">口袋彩铃</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
            </div>
            <div className="sidebar-main-2">
                <Header
                    style={{ height: '1rem' }}
                    left={[<span className="iconfont icon-dengpao"></span>, <span className="sidebar-main-title">创作者中心</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
            </div>
            <div className="sidebar-main-1">
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-6"></span>, <span className="sidebar-main-title">我的订单</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-shijian"></span>, <span className="sidebar-main-title">定时停止播放</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
                <Header
                    style={{ height: '.76rem' }}
                    left={[<span className="iconfont icon-richscan_icon"></span>, <span className="sidebar-main-title">扫一扫</span>]}
                    right={[<span className="sidebar-main-right"></span>]}>
                </Header>
            </div>
            <div className="sidebar-bottom">
                <Flex className="sidebar-list-bottom" justify="between">
                    <Flex.Item style={{textAlign : "left"}}>
                        <span className="iconfont icon-z"></span>
                        <span>夜间模式</span>
                    </Flex.Item>
                    <Flex.Item style={{textAlign : "right"}}> 
                        <span className="iconfont icon-shezhi"></span>
                        <span>设置</span>
                    </Flex.Item>
                    <Flex.Item style={{textAlign : "right"}}>
                        <span className="iconfont icon-tuichu"></span>
                        <span onClick={() => signOut()}>退出</span>
                    </Flex.Item>
                </Flex>
            </div>
        </div>
    )
}

export default Sidebar