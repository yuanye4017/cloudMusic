import React from "react"
import asyncComponent from '@/utils/asyncComponent';

const Swiper = asyncComponent(() => import("@/components/find/swiper"));
const NavTag = asyncComponent(() => import("@/components/find/navTag"));
function Find() {
    return (
        <>
            <div style={{padding:"0.38rem 0"}}>
                <Swiper></Swiper>
            </div>
            <div>
                <NavTag></NavTag>
            </div>
        </>
    )
}

export default Find