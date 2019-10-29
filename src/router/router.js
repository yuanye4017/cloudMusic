import asyncComponent from '@/utils/asyncComponent'; // 异步加载组件

const Login = asyncComponent(() => import("@/pages/login/login"));
const Find = asyncComponent(() => import("@/pages/find/find"));
export const routerConfig = [
    {
        path:'/',
        component:Find,
        auth:true,
    },{
        path:'/login',
        component:Login,
    }
];