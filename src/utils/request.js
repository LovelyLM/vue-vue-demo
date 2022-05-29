import axios from 'axios';
import {ElMessage} from "element-plus";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

//相应拦截器
service.interceptors.response.use(response=>{
    console.log(response)

    const {success, message, data} = response.data
    //请求成功（200）
    if (success) {
        return data;
    } else {
        console.log(success)
        console.log(message)
        console.log(data)

        ElMessage.error(message)
        return Promise.reject(new Error(message))
    }
}, error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
})

export default service
