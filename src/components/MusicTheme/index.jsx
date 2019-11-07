import React from "react"
import { Card } from 'antd-mobile';
import "./index.scss"

function MusicTheme({width,marginbottom,showHeader,showFooter,imgUrl,introduce,num,name}) {
    const footer = (introduce) => {
        if(showFooter) {
            return (
                <div className="card-tip">{introduce}</div>
            )
        }else {
            return (
                <div className="card-tip-def">
                    <p>{name} &nbsp;</p>
                    <p>{introduce ? introduce :<span>&nbsp;</span>}</p>
                </div>
            )
        }  
    }
    const count = (num, point) => {
        let numStr = num.toString()
        if (numStr.length < 6) {
            return numStr;
        }else if (numStr.length > 5) {
            let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + 'w';
        }
    }
    return (
        <>
            <Card style={{width:width,marginBottom:marginbottom}}>
                {showHeader ? <Card.Header extra={<span style={{padding:"0 0.15rem"}}>{count(num,0)}</span>}/> : null}
                <Card.Body>
                    <img src={imgUrl} alt=""/>
                </Card.Body>
                <Card.Footer 
                    content={footer(introduce)} />
            </Card>
        </>
    )
}

export default MusicTheme
