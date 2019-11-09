import React from "react"
import { Flex } from 'antd-mobile';
import title_1 from "@/images/find_imgs/title_1.png"
import title_2 from "@/images/find_imgs/title_2.png"
import title_3 from "@/images/find_imgs/title_3.png"
import title_4 from "@/images/find_imgs/title_4.png"
import title_5 from "@/images/find_imgs/title_5.png"
function NavTag() {
    return (
        <Flex className="navTag" justify="between">
            <Flex.Item>
                <img src={title_1} alt="每日推荐" />
                <p className="navTag-title">每日推荐</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_2} alt="歌单" />
                <p className="navTag-title">歌单</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_3} alt="排行榜" />
                <p className="navTag-title">排行榜</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_4} alt="电台" />
                <p className="navTag-title">电台</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_5} alt="直播" />
                <p className="navTag-title">直播</p>
            </Flex.Item>
        </Flex>
    )
}

export default NavTag