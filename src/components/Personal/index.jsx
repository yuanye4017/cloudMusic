import React from "react"
import asyncComponent from '@/utils/asyncComponent';
const List = asyncComponent(() => import("@/components/Personal/List"));
function Personal() {
    return (
        <div>
            <List></List>
        </div>
    )
}

export default Personal