import axios from 'axios';
import querystring from 'querystring'

const service = axios.create(/*{
    transformRequest: [data => {
        return querystring.stringify(data);
    }]
}*/);

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 请求之前，做的事
    return config;
}, function (error) {
    // 请求异常做的事
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 响应数据时，做的事
    return response;
}, function (error) {
    // 响应发生异常做的事
    return Promise.reject(error);
});

/*service.post('http://localhost:8181/findUserList')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });*/

export default service;