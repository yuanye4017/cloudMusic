import React from "react"
import { Flex, Button } from 'antd-mobile';
import title_1 from "@/images/标题_1.png"
import title_2 from "@/images/标题_2.png"
function navTag() {
    return (
        <Flex className="navTag" justify="between">
            <Flex.Item>
                <img src={title_1} alt="" />
            </Flex.Item>
            <Flex.Item>
                <img src={title_2} alt="" />
            </Flex.Item>
            <Flex.Item>
                <img src={title_1} alt="" />
            </Flex.Item>
            <Flex.Item>
                <img src={title_2} alt="" />
            </Flex.Item>
            <Flex.Item>
                <img src={title_1} alt="" />
            </Flex.Item>
        </Flex>
    )
}

export default navTag