import service from '@/utils/service'

/*
* 添加到我的购物车
* */
export function AddPdtToCar(data) {
    return  service.post('http://localhost:8181/addMyCar', data)
}

/*
* 查询购物车列表
* */
export function QueryCar(data) {
    return  service.post('http://localhost:8181/findMyCarList', data)
}
/*
* 移除购物信息
* */
export function RemoveCar(data) {
    return  service.post('http://localhost:8181/removeMyCar', data)
}
/*
* 移除全部购物信息
* */
export function RemoveAllCar(data) {
    return  service.post('http://localhost:8181/removeAllMyCar', data)
}
