import React , { useState,useEffect } from "react"
import "./index.scss"
import asyncComponent from '@/utils/asyncComponent';
import { getDailySong } from "@/api/api"
import vip from '@/images/list_imgs/vip.png'
const Header = asyncComponent(() => import("@/components/Header"));
const MusicList = asyncComponent(() => import("@/components/MusicList"));
function DailyAdvice({ history }) {
    const [musicList, setMusicList] = useState([])
    const [title,setTitle] = useState("")
    const [showMark,setShowMark] = useState(false)
    const [absorbTop,setAbsorbTop] = useState(false)
    const [date] = useState(new Date());
    const goBack = () => {
        history.goBack()
    }
    const bindHandleScroll = (event) =>{
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)

        if(scrollTop > 10) {
            setShowMark(true)
        }else {
            setShowMark(false)
        }
        if(scrollTop >= 100) {
            setAbsorbTop(true)
            setTitle("每日推荐")
        }else {
            setAbsorbTop(false)
            setTitle("")
        }
    }

    useEffect(() => {
        getDailySong().then(({data}) => {
            setMusicList([...data.dailySongs])
        })
        window.addEventListener('scroll', bindHandleScroll)

        return () => {
            window.removeEventListener('scroll', bindHandleScroll)
        }
    },[])
    return (
        <div className="daily-advice-wrap">
            <div className={absorbTop ? "daily-absorb-header daily-advice-header" : "daily-advice-header"} style={showMark ? {background: "linear-gradient(45deg,rgba(254,172,94,1),rgba(199,121,208,1),rgba(75,192,200,1))",height:"1.6rem"} : {}}>
                <Header
                    onLeftClick = {() => goBack()}
                    style={{height:'.92rem',color:'#fff'}}
                    left = {[<i className="iconfont icon-flow"></i>,<span className="daily-title">{title}</span>]}
                    right = {[<i className="iconfont icon-wenhao"></i>]}>
                </Header>
            </div>
            <div className={ showMark ? "mark-wrap" : ''}>
                <div className="daily-advice-time">
                    <span style={{fontSize:".6rem"}}>{date.getDate()}</span>
                    <span style={{padding:"0 .1rem",fontSize:".3rem"}}>/</span>
                    <span style={{fontSize:".3rem"}}>{date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1}</span>
                </div>
                <div className="daily-advice-history">
                    <Header
                        style={{height:'.48rem',color:'#fff'}}
                        left = {[<div className="left-icon">历史推荐 <img src={vip} alt="黑胶会员" /></div>]}
                        right = {[<div className="right-icon">
                                <span className="right-head"></span>,
                                <span className="right-head">2</span>,
                                <span className="right-head">3</span>,
                                <i className="iconfont icon-youbianjiantou"></i>
                                </div>]}>
                    </Header>
                    <div className="daily-left">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="daily-right">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <MusicList list={ musicList } absorbTop={absorbTop}></MusicList>
        </div>
    )
}

export default DailyAdvice