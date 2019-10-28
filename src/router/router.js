import asyncComponent from '@/utils/asyncComponent'; // 异步加载组件

import Home from "pages/home/home.jsx";
const Login = asyncComponent(() => import("@/pages/login/login"));

export const routerConfig = [
    {
        path:'/',
        component:Home,
        auth:true,
    },{
        path:'/login',
        component:Login,
    }
];