import service from '@/utils/service'

/*
* 添加到我的购物车
* */
export function AddPdtToCar(data) {
    return  service.post('http://localhost:8181/addMyCar', data)
}

/*
* 注册
* */
export function ToRegister(data) {
    return  service.post('http://localhost:8181/register', data)
}
