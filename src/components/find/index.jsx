import React from "react"
import asyncComponent from '@/utils/asyncComponent';

const Swiper = asyncComponent(() => import("@/components/find/swiper"));
function Find() {
    return (
        <>
           <Swiper></Swiper>
        </>
    )
}

export default Find