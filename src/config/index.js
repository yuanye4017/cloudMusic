import axios from "axios"
// import store from "@/store/index" 
// import { createHashHistory } from 'history'; // hash路由
// const history = createHashHistory();
// history.push('/login');
axios.interceptors.request.use((config) => {
    return config
})
axios.interceptors.response.use(({data}) => {
    return data
})


