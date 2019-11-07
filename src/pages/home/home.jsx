import React from "react"
import "./home.scss"
import { Tabs, Badge ,Icon} from 'antd-mobile';
import asyncComponent from '@/utils/asyncComponent';
import menu from '@/images/tab_imgs/menu.png'
import search from '@/images/tab_imgs/search.png'
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
                    <Badge><img src={menu} alt="菜单" /></Badge>
            </div>
            <div className="header-list">
                <Tabs
                    tabs={tabs}
                    initialPage={1}
                    onChange={(name,index) => handelChange(name,index)}
                    tabBarBackgroundColor="#fff"
                    tabBarTextStyle={{fontSize: "0.3rem"}}
                    tabBarActiveTextColor="#343434"
                    tabBarInactiveTextColor="#7f7f7f"
                    tabBarUnderlineStyle={{border:0}}
                >
                    <div>
                        我的
                    </div>
                    <div className="find-wrap">
                        <Find />
                    </div>
                    <div>
                        云村
                    </div>
                    <div>
                        视频
                    </div>
                </Tabs>
            </div>
            <div className="header-search">
                <Badge><img src={search} alt="搜索" /></Badge>
            </div>
        </div>
    )
}

export default Home