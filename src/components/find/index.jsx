import React,{Fragment} from "react"
import asyncComponent from '@/utils/asyncComponent';

const Swiper = asyncComponent(() => import("@/components/find/swiper"));
const NavTag = asyncComponent(() => import("@/components/find/navTag"));
const MusicTheme = asyncComponent(() => import("@/components/MusicTheme/index"));

function Find() {
    const arr = [1,2,3,4,5,6]
    return (
        <>
            <div style={{padding:"0.38rem 0",background:'#fff'}}>
                <Swiper></Swiper>
            </div>
            <div style={{background:"#fff",paddingBottom:'0.18rem'}}> 
                <NavTag></NavTag>
            </div>
            <div className="recommend">
                <div className="recommend-tip">
                    <p>推荐歌单</p>
                    <p>歌单广场</p>
                </div>
                <div className="recommend-music-theme">
                    {
                        arr.map((value) => {
                            return (
                                <MusicTheme width={'31.5%'} marginbottom={"0.36rem"} key={value}></MusicTheme>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Find