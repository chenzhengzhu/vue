import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta: {
      name: "初始页"
    }
  },
  {
    path: "/test",
    name: "Test",
    hidden: true,
    meta: {
      name: "测试"
    },
    component: () => import('@/views/Test')
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import('@/views/login')
  },
  {
      path: "/index",
      name: "Index",
      meta: {
          name: "主页面",
          icon: "index"
      },
      component: () => import('@/views/index'),
      children: [
          {
              path: "/index",
              name: "Index",
              meta: {
                  name: "首页",
                  icon: "index"
              },
              component: () => import('@/components/index.vue')
          },
          {
              path: "/message",
              name: "Message",
              meta: {
                  name: "消息",
                  icon: "message"
              },
              component: () => import('@/components/Message')
          },
          {
              path: "/MyInfos",
              name: "MyInfos",
              meta: {
                  name: "个人中心",
                  icon: "user"
              },
              component: () => import('@/components/MyInfos')
          }
      ]
  },
  {
      path: "/sigh",
      name: "Sigh",
      meta: {
          name: "景点介绍",
          icon: "scenery"
      },
      component: () => import('@/views/index'),
      children: [
          {
              path: "/scenery",
              name: "Scenery",
              meta: {
                  name: "旅游景点",
                  icon: "scenery"
              },
              component: () => import('@/components/scenery.vue')
          },
          {
              path: "/navigat",
              name: "Navigat",
              meta: {
                  name: "导航",
                  icon: "navigat"
              },
              component: () => import('@/components/Navigat.vue')
          },
          {
              path: "/weather",
              name: "Weather",
              meta: {
                  name: "天气查询",
                  icon: "weather"
              },
              component: () => import('@/components/Weather.vue')
          }
      ]

  },
  {
      path: "/shop",
      name: "Shop",
      meta: {
          name: "购物中心",
          icon: "shop"
      },
      component: () => import('@/views/index'),
      children: [
          {
              path: "/product",
              name: "Product",
              meta: {
                  name: "商品主页",
                  icon: "shop"
              },
              component: () => import('@/components/Product.vue')
          },
          {
              path: "/order",
              name: "Order",
              meta: {
                  name: "订单管理",
                  icon: "order"
              },
              component: () => import('@/components/Order.vue')
          },
          {
              path: "/car",
              name: "Car",
              meta: {
                  name: "购物车",
                  icon: "car"
              },
              component: () => import('@/components/Car.vue')
          }
      ]

  },
  {
      path: "/chck",
      name: "Chck",
      hidden: true,
      meta: {
          name: "组件处理",
          icon: "chck"
      },
      component: () => import('@/views/index'),
      children: [
          {
              path: "/addcars",
              name: "addCars",
              meta: {
                  name: "增加到购物车",
                  icon: "addcar"
              },
              component: () => import('@/components/addCars.vue')
          },
          {
              path: "/addcar",
              name: "addCar",
              meta: {
                  name: "修改购物车",
                  icon: "addcar"
              },
              component: () => import('@/components/addCar.vue')
          },
          {
              path: "/OrderDetail",
              name: "orderDetail",
              meta: {
                  name: "订单明细",
                  icon: "order"
              },
              component: () => import('@/components/OrderDetail.vue')
          }
      ]

  }
];

const router = new VueRouter({
  routes
});

export default router;
