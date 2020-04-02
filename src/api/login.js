import service from '@/utils/service'

/*
* 登录
* */
export function Tologin(data) {
   return  service.post('http://localhost:8181/login', data)
}

/*
* 注册
* */
export function ToRegister(data) {
   return  service.post('http://localhost:8181/register', data)
}

