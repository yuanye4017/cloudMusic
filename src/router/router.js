import asyncComponent from '@/utils/asyncComponent'; // 异步加载组件

const Login = asyncComponent(() => import("@/pages/Login/Login"));
const Home = asyncComponent(() => import("@/pages/Home/Home"));
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