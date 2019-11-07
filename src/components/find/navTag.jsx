import React from "react"
import { Flex } from 'antd-mobile';
import title_1 from "@/images/标题_1.png"
import title_2 from "@/images/标题_2.png"
function navTag() {
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
                <img src={title_1} alt="排行榜" />
                <p className="navTag-title">排行榜</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_2} alt="电台" />
                <p className="navTag-title">电台</p>
            </Flex.Item>
            <Flex.Item>
                <img src={title_1} alt="直播" />
                <p className="navTag-title">直播</p>
            </Flex.Item>
        </Flex>
    )
}

export default navTag