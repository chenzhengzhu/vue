import Vue from "vue";
import SvgIcon from "./SvgIcon";

Vue.component('svg-icon', SvgIcon);
/*Vue.component('svg-icon', {
    template: "<div>adc</div>"
});*/

/**
 * reqire,context;读取指定目录的所有文件
 * 第一个：目录
 * 第二个：是否便利子级目录
 * 第三个：定义遍历文件规则
 */
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
    return requireContext.keys().map(requireContext)
}
requireAll(req)