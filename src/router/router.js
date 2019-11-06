import asyncComponent from '@/utils/asyncComponent'; // 异步加载组件

const Login = asyncComponent(() => import("@/pages/login/login"));
const Home = asyncComponent(() => import("@/pages/home/home"));
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