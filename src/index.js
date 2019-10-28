import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Route from "./router/";
import fastclick from "fastclick"  // 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件
import { AppContainer }  from "react-hot-loader" // 热加载局部更新
import {Provider} from 'react-redux';  // redux
import store from "./store/index" // 设置 store
import './style/base.css'; // 全局样式
import "./config/index"
fastclick.attach(document.body); 

const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
        <AppContainer>
            <Component />
        </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}
  
render(Route);
  
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
