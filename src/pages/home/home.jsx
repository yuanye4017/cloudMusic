import React from "react"
import "./home.scss"
import { Tabs, Badge ,Icon} from 'antd-mobile';
import asyncComponent from '@/utils/asyncComponent';

const Find = asyncComponent(() => import("@/components/find"));
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
            <div className="header-menu"> 
                <Badge 
                    text={36} 
                    style={{ marginLeft: 12 }} 
                    className="iconfont icon-menu"></Badge>
            </div>
            <div className="header-list">
                <Tabs tabs={tabs} 
                initialPage={1}
                onChange={(name,index) => handelChange(name,index)}
                tabBarBackgroundColor="#fff"
                tabBarTextStyle={{fontSize: "0.26rem",color:"#8e8e8e"}}
                tabBarUnderlineStyle={{border:0}}>
                    <div>
                       
                    </div>
                    <div className="find-wrap">
                        <Find />
                    </div>
                    <div>1</div>
                    <div>1</div>
                </Tabs>  
            </div>
            <div className="header-search"> 
                <span className="iconfont icon-sousuo"></span>
            </div>
        </div>
    )
}

export default Home