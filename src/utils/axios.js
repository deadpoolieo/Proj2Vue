import axios from "axios";

//创建axios实例
const service = axios.create({
    //后端的请求路径
    baseURL:'http://localhost:8082/user',
    timeout:50000
})

//请求拦截器
axios.interceptors.request.use(
    function (config){
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)
//响应拦截器
axios.interceptors.response.use(
    function (config){
        return config
    },
    function (error){
        return Promise.reject(error)
    }
)

export default service