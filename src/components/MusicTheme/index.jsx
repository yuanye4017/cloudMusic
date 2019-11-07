import React from "react"
import { Card } from 'antd-mobile';
import "./index.scss"
import theme from "@/images/theme.png"
function MusicTheme({width,marginbottom}) {
    return (
        <>
            <Card style={{width:width,marginBottom:marginbottom}}>
                <Card.Header extra={<span>this is extra</span>}/>
                <Card.Body>
                    <img src={theme} alt=""/>
                </Card.Body>
                <Card.Footer 
                    content={<div className="card-tip">全球音乐排行榜，古风让你的世界变得更好，天使降落是对世界的期盼</div>} />
            </Card>
        </>
    )
}

export default MusicTheme
