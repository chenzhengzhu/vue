import service from '@/utils/service'

/*
* 购物车列表里下单
* */
export function addOrders(data) {
    return  service.post('http://localhost:8181/addOrders', data)
}

/*
* 直接下单
* */
export function addOrder(data) {
    return  service.post('http://localhost:8181/addOrder', data)
}

/*
* 查询订单列表
* */
export function findOrderList(data) {
    return  service.post('http://localhost:8181/findOrderList', data)
}

/*
* 删除订单某条记录
* */
export function removeOrder(data) {
    return  service.post('http://localhost:8181/removeOrder', data)
}

/*
* 删除订单多条记录
* */
export function removeOrders(data) {
    return  service.post('http://localhost:8181/removeOrders', data)
}

/*
* 查询订单详细信息
* */
export function findOrderDetail(data) {
    return  service.post('http://localhost:8181/findOrderdetail', data)
}
