<template>
    <div id="main-wrap">
        <router-view :username="this.$props.username" />
    </div>
</template>

<script>
    export default {
        name: "main.vue",
        props: {
            username: {
                type: String
            },
            data() {
                console.log(this.$props.username)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/config.scss";
    #main-wrap {
        position: fixed;
        top: 75px;
        left: $navMenu;
        right: 0;
        bottom: 0;
    }
</style>