import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Route from "./router/"; // 集中式管理路由
import fastclick from "fastclick"  // 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件
import {Provider} from 'react-redux';  // redux
import store from "./store/index" // 设置 store
import './style/base.css'; // 全局样式
import 'antd-mobile/dist/antd-mobile.css'; // ui组件antd-mobile样式文件
import "./config/index" // 全局请求钩子
import "@/iconfont/iconfont.css" // 阿里图标库

fastclick.attach(document.body); 

const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root'),
    )
}
  
render(Route);
serviceWorker.unregister();
