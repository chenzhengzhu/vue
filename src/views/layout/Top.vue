<template>
    <div id="top-wrap">
        <div class="Nav">
            欢迎来到智慧旅游之广州行平台
        </div>
        <div class="right">
            <div class="user-info">
                <svg-icon iconClass="user" className="user" />{{this.$store.state.usname}}
            </div>
            <div class="header-icon" @click="signup()">
                <svg-icon iconClass="exit" className="exit" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top",
        methods: {
            signup(){
                this.$store.commit('SET_NAME', '')
                this.$router.push({
                    name: 'Login'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #top-wrap {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 75px;
        background: cornflowerblue;
    }

    .Nav {
        margin-left: 40px;
        margin-top: 22px;
        font-size: 20px;
    }

    .right {
        position: fixed;
        top: 20px;
        right: 150px;
        font-size: 20px;
    }

    .svg-icon {
        margin-right: 10px;
        width: 2em;
        height: 2em;
    }

    .user-info {
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #ededed;
        + .header-icon {
            position: fixed;
            right: 50px;
            top: 20px;
        }
    }

</style>