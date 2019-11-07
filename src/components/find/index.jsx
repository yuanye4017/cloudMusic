import React,{useState,useEffect} from "react"
import asyncComponent from '@/utils/asyncComponent';
import "./index.scss"
import { getPlaylist,getNewest,getNewSong } from "@/api/api"
const Swiper = asyncComponent(() => import("@/components/find/swiper"));
const NavTag = asyncComponent(() => import("@/components/find/navTag"));
const MusicTheme = asyncComponent(() => import("@/components/MusicTheme/index"));

function Find() {
    const [newMusicActive,setNewMusicActive] = useState(true)
    const [playlist,setPlaylist] = useState([])
    const [newest,setNewest] = useState([])
    
    const getNewMusic = (type) => {
        setNewMusicActive(!newMusicActive);
        if(type === '1') {
            getNewest().then((data) => {
                setNewest([...data.albums.slice(0,3)])
            })
        }else {
            getNewSong().then((data) => {
               console.log(data)
               var arrList = data.data.slice(1,4)
               var arr = [];
               arrList.forEach(element => {
                    arr.push(element.album)
               });
               setNewest([...arr])
            })
        }
       
    }
    useEffect(() => {
        getPlaylist().then((data) => {
            setPlaylist(data.playlists)
        })
        getNewest().then((data) => {
            setNewest(data.albums.slice(0,3))
        })
    },[])
    return (
        <>
            <div className="banner">
                <Swiper></Swiper>
            </div>
            <div style={{background:"#fff"}}>
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
                            playlist.map((value) => {
                                return (
                                    <MusicTheme 
                                        key={value.id}
                                        showHeader={true}
                                        showFooter={true}
                                        width={'31.5%'}
                                        marginbottom={"0.36rem"} 
                                        imgUrl={value.coverImgUrl} 
                                        introduce={value.description}
                                        num={value.playCount}
                                    ></MusicTheme>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="recommend recommend-music">
                    <div className="new-music">
                        <p className="new-music-tip">
                            <span className={newMusicActive ? 'active' : null} onClick={() => getNewMusic('1')}>新碟</span > 
                            <span style={{padding:'0 0.16rem'}}>|</span>   
                            <span className={newMusicActive ? null : 'active'} onClick={() => getNewMusic('2')}>新歌</span>  
                        </p>
                        <p className="right-tip">更多新碟</p>
                    </div>
                    <div className="recommend-music-theme">
                        {
                            newest.map((value) => {
                                return (
                                    <MusicTheme 
                                        showHeader={false}
                                        showFooter={false}
                                        width={'31.5%'}
                                        marginbottom={"0.36rem"} 
                                        imgUrl={value.picUrl} 
                                        introduce={value.company}
                                        name={value.name}
                                        key={value.id}></MusicTheme>
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