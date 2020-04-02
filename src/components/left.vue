<template>
    <div id="left-wrap">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>

            <template v-for="(item, index) in routes">
                <el-submenu v-if="!item.hidden" :key="item" :index="index+1">
                    <template slot="title">
                        <i class="el-icon-first-aid-kit"></i>
                        <span>{{ item.meta.name }}</span>
                    </template>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
                    <!--<el-menu-item-group >
                        <el-menu-item index="1-1">首页</el-menu-item>
                        <el-menu-item index="1-2">消息中心</el-menu-item>
                        <el-menu-item index="1-3">个人信息</el-menu-item>
                    </el-menu-item-group>-->
                </el-submenu>
            </template>

           <!-- <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-map-location"></i>
                    <span>景点介绍</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">旅游景点</el-menu-item>
                    <el-menu-item index="2-2">导航</el-menu-item>
                    <el-menu-item index="2-3">天气预报</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>购物中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">商品主页</el-menu-item>
                    <el-menu-item index="3-2">订单管理</el-menu-item>
                    <el-menu-item index="3-3">我的购物车</el-menu-item>
                </el-menu-item-group>
            </el-submenu>-->
        </el-menu>
    </div>
</template>

<script>
    import { reactive, ref, toRefs, onMounted } from '@vue/composition-api';
    export default {
        name: "left",
        setup(props, {root}) {
            const routes = reactive(root.$router.options.routes);
            console.log(routes);
            return {
                routes
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../style/config.scss";
    #left-wrap {
        position: fixed;
        top: 75px;
        left: 0;
        width: $navMenu;
        height: 100vh;
        background-color: #344a5f;
    }
</style>