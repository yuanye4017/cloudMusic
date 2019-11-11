import React,{useState,useEffect} from "react"
import asyncComponent from '@/utils/asyncComponent';
import "./index.scss"
import { getPlaylist,getNewest,getNewSong } from "@/api/api"
const Swiper = asyncComponent(() => import("./Swiper"));
const NavTag = asyncComponent(() => import("./NavTag"));
const MusicTheme = asyncComponent(() => import("@/components/MusicTheme/index"));

function Find({ history }) {
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
            setPlaylist(data.result)
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
                <NavTag history={history}></NavTag>
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
                                        id={value.id}
                                        type={value.type}
                                        name={value.name}
                                        copywriter={value.copywriter}
                                        picUrl={value.picUrl}
                                        canDislike={value.canDislike}
                                        trackNumberUpdateTime={value.trackNumberUpdateTime}
                                        playCount={value.playCount}
                                        trackCount={value.trackCount}
                                        highQuality={value.highQuality}
                                        alg={value.alg}
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
                                        key={value.id}
                                        id={value.id}
                                        type={value.type}
                                        name={value.name}
                                        copywriter={value.copywriter}
                                        picUrl={value.blurPicUrl}
                                        canDislike={value.canDislike}
                                        trackNumberUpdateTime={value.trackNumberUpdateTime}
                                        playCount={value.playCount}
                                        trackCount={value.trackCount}
                                        highQuality={value.highQuality}
                                        alg={value.alg}
                                    ></MusicTheme>
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