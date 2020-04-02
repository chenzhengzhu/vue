import service from '@/utils/service'

/*
* 查询所有商品
* */
export function FindProductList() {
    return  service.post('http://localhost:8181/findProductList')
}

/*
* 注册
* */
export function ToRegister(data) {
    return  service.post('http://localhost:8181/register', data)
}

