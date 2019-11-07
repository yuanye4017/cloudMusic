import React,{useState} from "react"
import asyncComponent from '@/utils/asyncComponent';
import "./index.scss"

const Swiper = asyncComponent(() => import("@/components/find/swiper"));
const NavTag = asyncComponent(() => import("@/components/find/navTag"));
const MusicTheme = asyncComponent(() => import("@/components/MusicTheme/index"));

function Find() {
    const [newMusicActive,setNewMusicActive] = useState(true)

    const arr = [1,2,3,4,5,6]
    const arr2 = [1,2,3]
    return (
        <>
            <div style={{padding:"0.38rem 0",background:'#fff'}}>
                <Swiper></Swiper>
            </div>
            <div style={{background:"#fff",paddingBottom:'0.18rem'}}> 
                <NavTag></NavTag>
            </div>
            <div className="recommend-wrap">
                <div className="recommend">
                    <div className="recommend-tip">
                        <p className="left-tip">推荐歌单</p>
                        <p className="right-tip">歌单广场</p>
                    </div>
                    <div className="recommend-music-theme">
                        {
                            arr.map((value) => {
                                return (
                                    <MusicTheme 
                                        showHeader={true}
                                        showFooter={true}
                                        width={'31.5%'}
                                        marginbottom={"0.36rem"} 
                                        key={value}></MusicTheme>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="recommend">
                    <div className="new-music">
                        <p className="new-music-tip">
                            <span className={newMusicActive ? 'active' : null} onClick={() => setNewMusicActive(!newMusicActive)}>新碟</span > 
                            <span style={{padding:'0 0.16rem'}}>|</span>   
                            <span className={newMusicActive ? null : 'active'} onClick={() => setNewMusicActive(!newMusicActive)}>新歌</span>  
                        </p>
                        <p className="right-tip">更多新碟</p>
                    </div>
                    <div className="recommend-music-theme">
                        {
                            arr2.map((value) => {
                                return (
                                    <MusicTheme 
                                        showHeader={false}
                                        showFooter={false}
                                        width={'31.5%'}
                                        marginbottom={"0.36rem"} 
                                        key={value}></MusicTheme>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find