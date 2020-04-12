import Vue from "vue";
import VueCompositionApi from "@vue/composition-api"
import axios from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./icon"
import VueQriously from 'vue-qriously'
import VueAMap from 'vue-amap'; // 高德
import BaiduMap from 'vue-baidu-map';

Vue.use(BaiduMap, {
    ak: 'qDfvflCaR2gYP5dQcfCbBbAsFHcEywrp'
});
Vue.use(VueAMap);
Vue.use(VueQriously)
Vue.use(ElementUI);
Vue.use(VueCompositionApi)
Vue.config.productionTip = false;

VueAMap.initAMapApiLoader({
    key: 'cxlcz',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
