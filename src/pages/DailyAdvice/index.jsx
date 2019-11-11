import React , { useState,useEffect } from "react"
import "./index.scss"
import asyncComponent from '@/utils/asyncComponent';
import { getDailySong } from "@/api/api"
const Header = asyncComponent(() => import("@/components/Header"));
const MusicList = asyncComponent(() => import("@/components/MusicList"));
function DailyAdvice({ history }) {
    const [musicList, setMusicList] = useState([])
    const [title,setTitle] = useState("")
    const [showMark,setShowMark] = useState(false)
    const [absorbTop,setAbsorbTop] = useState(false)

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

        if(scrollTop >= 165) {
            setAbsorbTop(true)
            setTitle("每日推荐")
        }else {
            setAbsorbTop(false)
            setTitle("")
        }
    }

    useEffect(() => {
        getDailySong().then(({data}) => {
            console.log(data)
            setMusicList([...data.dailySongs])
        })
        window.addEventListener('scroll', bindHandleScroll)
    },[])
    return (
        <div className="daily-advice-wrap">
            <div className="daily-advice-header">
                <Header
                    onLeftClick = {() => goBack()}
                    style={{height:'.4rem',color:'#fff'}}
                    left = {[<i className="iconfont icon-flow"></i>,<span className="title">{title}</span>]}
                    right = {[<i className="iconfont icon-wenhao"></i>]}>
                </Header>
            </div>
            <div className={ showMark ? "mark-wrap" : ''} style={absorbTop ? { position:"fixed",top:"-.6rem" } : {}}>
                <div className="daily-advice-time">
                    <span style={{fontSize:".5rem"}}>9</span>
                    <span style={{padding:"0 .04rem",fontSize:".32rem"}}>/</span>
                    <span style={{fontSize:".26rem"}}>11</span>
                </div>
                <div className="daily-advice-history">
                    <Header
                        style={{height:'.5rem',color:'#fff'}}
                        left = {[<div className="left-icon">今日推荐</div>]}
                        right = {[<span className="right-head">1</span>,
                                <span className="right-head">2</span>,
                                <span className="right-head">3</span>,
                                <i className="iconfont icon-youbianjiantou right-icon"></i>]}>
                    </Header>
                </div>
            </div>
            <MusicList list={ musicList } absorbTop={absorbTop}></MusicList>
        </div>
    )
}

export default DailyAdvice