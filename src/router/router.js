import asyncComponent from '@/utils/asyncComponent'; // 异步加载组件

const Login = asyncComponent(() => import("@/pages/Login/login"));
const Home = asyncComponent(() => import("@/pages/Home/home"));
const DailyAdvice = asyncComponent(() => import("@/pages/DailyAdvice"));
export const routerConfig = [
    {
        path:'/',
        component:Home,
        auth:true,
    }, {
        path:'/daily',
        component:DailyAdvice,
        auth:true,
    },{
        path:'/login',
        component:Login,
    }
];