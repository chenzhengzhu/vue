<template>
    <div>
        <LayoutTop  />
        <Nav  />
        <Layoumain  />
    </div>
</template>

<script>
    import LayoutTop from "./layout/Top.vue";
    import Nav from "./layout/Nav.vue";
    import Layoumain from "./layout/Main";
    export default {
        name: "index",
        components: { LayoutTop, Nav, Layoumain},
        data() {
            return {
                name: this.$route.query.username
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>