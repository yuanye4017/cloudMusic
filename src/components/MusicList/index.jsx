import React from "react"
import "./index.scss"
import asyncComponent from '@/utils/asyncComponent';
const Header = asyncComponent(() => import("@/components/Header"));

const detailHTML = (name,alias=[],artists=[],album) => {
    return (
        <div className="music-title-box">
            <h3 className="music-name">
                <span>{name}</span>
                {alias.length > 0 ? <span className="alias">({alias[0]})</span> : ''}
             </h3>
            <p className="music-auth">
                {
                    artists.map((value,index) => {
                        if(index == 0) {
                            return (
                                <span key={value.id}>{value.name}</span>
                            )
                        }else {
                            return (
                                <span key={value.id}>/{value.name}</span>
                            )
                        }
                    })
                }
                <span> - </span><span>{album}</span>
            </p>
        </div>
    )
}
function MusicList({ list , absorbTop}) {
    return (
        <>
            <div className={absorbTop ? "absorb-top music-header" : "music-header"}>
                <Header
                    style={{height:'.5rem',color:'#000'}}
                    left = {[<i className="iconfont icon-bofang left-tip"></i>, <span className="left-tip">播放全部</span>]}
                    right = {[<i className="iconfont icon-caidan1 right-tip"></i>,<span className="right-tip">多选</span>]}>
                </Header>
            </div>
            <div className={absorbTop ? "absorb-bottom music-list" : "music-list"}>
                {
                    list.map(( value ) => {
                        return (
                            <Header
                                key = {value.commentThreadId}
                                style={{height:'.8rem',color:'#000'}}
                                left = {[<img src={value.album.blurPicUrl} /> ]}
                                center = {[detailHTML(value.name,value.alias,value.artists,value.album.name)]}
                                right = {[<i className="iconfont icon-bofang1 right-tip"></i>,<i className="iconfont icon-yuandiancaidan right-tip"></i>]}>
                            </Header>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MusicList