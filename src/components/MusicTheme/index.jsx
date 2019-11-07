import React from "react"
import { Card } from 'antd-mobile';
import "./index.scss"
import theme from "@/images/theme.png"
function MusicTheme({width,marginbottom,showHeader,showFooter}) {
    const footer = () => {
        if(showFooter) {
            return (
                <div className="card-tip">全球音乐排行榜，古风让你的世界变得更好，天使降落是对世界的期盼</div>
            )
        }else {
            return (
                <div className="card-tip-def">
                    <p>标题</p>
                    <p>信息</p>
                </div>
            )
        }  
    }
    return (
        <>
            <Card style={{width:width,marginBottom:marginbottom}}>
                {showHeader ? <Card.Header extra={<span>this is extra</span>}/> : null}
                <Card.Body>
                    <img src={theme} alt=""/>
                </Card.Body>
                <Card.Footer 
                    content={footer()} />
            </Card>
        </>
    )
}

export default MusicTheme
