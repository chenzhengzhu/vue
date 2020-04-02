<template>
    <div id="left-wrap">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="Close"
                :collapse="isCollapse"
                :uniqueOpened="uniqueOpened"
                router>

            <template v-for="(item, index) in routes">
                <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
                    <template slot="title">
                        <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
                        <span style="font-size: 20px">{{ item.meta.name }}</span>
                    </template>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path"><svg-icon :iconClass="subItem.meta.icon" :className="subItem.meta.icon" />{{subItem.meta.name}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { reactive, ref, toRefs, onMounted } from '@vue/composition-api';
    export default {
        name: "left",
        setup(props, {root}) {
            const routes = reactive(root.$router.options.routes);

            const isCollapse = ref(false);

            const uniqueOpened = ref(true);

            let handleOpen = (key, keyPath) => {
            };

            let Close = (key, keyPath) => {
            };
            return {
                routes,
                handleOpen,
                Close,
                isCollapse,
                uniqueOpened
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/config.scss";
    #left-wrap {
        position: fixed;
        top: 75px;
        left: 0;
        width: $navMenu;
        height: 100vh;
        background-color: #344a5f;
        svg {
            fill: currentColor;
            color: deepskyblue;
            font-size: 20px;
            margin-right: 10px;
        }
    }
    .el-menu-item {
        font-size: 17px;
    }

    .el-submenu__title {
        font-size: 20px !important;
    }
</style>