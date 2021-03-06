import React from "react"
import { Card } from 'antd-mobile';
import "./index.scss"
import crown from "@/images/list_imgs/crown.png"
import wan from "@/images/list_imgs/wan.png"
function MusicTheme(obj) {
    const count = (num) => {
        if(num > 100000 && num < 100000000){;
            return parseInt(num / 10000) + "万"
        }else if(num < 100000){
            return num
        }else{
            return parseFloat(num / 100000000).toFixed(1) + "亿"
        }
    }
    const goSongList = (id) => {
        console.log(id,this)
    }
    return (
        <>
            <Card onClick={() => goSongList(obj.id)}>
                <Card.Body>
                    <div className="card-top">
                        <img src={crown} alt="精品歌单" style={{display:obj.highQuality?"block":"none"}}/>
                        <p style={{display:obj.playCount?"flex":"none"}}>
                            <img src={wan} alt="播放次数"/>
                            <span>{count(obj.playCount)}</span>
                        </p>
                    </div>
                    <img src={obj.picUrl} alt={obj.picUrl}/>
                </Card.Body>
                <Card.Footer
                    content={obj.name} />
            </Card>
        </>
    )
}

export default MusicTheme
