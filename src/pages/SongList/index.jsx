import React , { useState,useEffect } from "react"
import "./index.scss"
import asyncComponent from '@/utils/asyncComponent';
import { getDailySong } from "@/api/api"
import vip from '@/images/list_imgs/vip.png'
const Header = asyncComponent(() => import("@/components/Header"));
const MusicList = asyncComponent(() => import("@/components/MusicList"));
function SongList({ history }) {
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

    },[])
    return (
        <div>
            songlist
        </div>
    )
}

export default SongList