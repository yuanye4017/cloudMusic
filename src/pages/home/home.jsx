import React from "react"
import "./home.scss"
import { Tabs, Badge } from 'antd-mobile';
const tabs = [
    { title: <Badge>我的</Badge> },
    { title: <Badge>发现</Badge> },
    { title: <Badge dot>云村</Badge> },
    { title: <Badge>视频</Badge> },
];
function Home() {
    const handelChange = (name,index) => {
        console.log(index,name)
    }
    return (
        <div className="home-wrap">
            <div className="header-list">
                <Tabs tabs={tabs}
                initialPage={1}
                onChange={(name,index) => handelChange(name,index)}
                tabBarBackgroundColor="#fff"
                tabBarTextStyle={{fontSize: "0.26rem"}}
                tabBarUnderlineStyle={{border:0}}>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </Tabs>
            </div>
        </div>
    )
}

export default Home