import React , { useState,useEffect } from "react"
import "./index.scss"
import asyncComponent from '@/utils/asyncComponent';
import { getDailySong } from "@/api/api"
const Header = asyncComponent(() => import("@/components/Header"));
const MusicList = asyncComponent(() => import("@/components/MusicList"));
function DailyAdvice({ history }) {
    const [musicList, setMusicList] = useState([])
    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
        getDailySong().then(({data}) => {
            setMusicList([...data.dailySongs])
        })
    },[])
    return (
        <div className="daily-advice-wrap">
            <div className="daily-advice-header">
                <Header 
                    onLeftClick = {() => goBack()}
                    style={{height:'.4rem',color:'#fff'}}
                    left = {[<i className="iconfont icon-flow"></i>]}
                    right = {[<i className="iconfont icon-wenhao"></i>]}> 
                </Header>
            </div>
            <div className="daily-advice-time">
                <span style={{fontSize:".5rem"}}>9</span>
                <span style={{padding:"0 .04rem",fontSize:".32rem"}}>/</span>
                <span style={{fontSize:".26rem"}}>11</span>
            </div>
            <div className="daily-advice-history" style={{padding:".42rem .32rem"}}>
                <Header 
                    style={{height:'.5rem',color:'#fff'}}
                    left = {[<div className="left-icon">今日推荐</div>]}
                    right = {[<span className="right-head">1</span>,
                            <span className="right-head">2</span>,
                            <span className="right-head">3</span>,
                            <i className="iconfont icon-youbianjiantou right-icon"></i>]}> 
                </Header>
            </div>
            <MusicList list={ musicList }></MusicList>
        </div>
    )
}

export default DailyAdvice