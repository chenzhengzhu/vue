<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
    export default  {
        name: 'app',
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style lang="scss">
  #app {}
</style>
