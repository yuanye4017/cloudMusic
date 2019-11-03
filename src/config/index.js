import axios from "axios"
// import store from "@/store/index" 
// import { createHashHistory } from 'history'; // hash路由
// const history = createHashHistory();
// history.push('/login');
import {Toast } from 'antd-mobile';
axios.interceptors.request.use((config) => {
    return config
})
axios.interceptors.response.use(function({data}) {
    return data
},function(error) {
    let response = error.response;
    Toast.info(response.data.msg, 1);
    return response.data
})


