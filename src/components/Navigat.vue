<template>
    <div style="overflow-y: auto">
        <div class="top-wrap">
            <el-input v-model="inputst" class="std" placeholder="请输入起点"></el-input>
            <el-input v-model="inputed" class="end" placeholder="请输入终点"></el-input>
            <el-button type="primary" @click="souch" class="btn" round>搜索</el-button>
        </div>
        <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @click="getPosition">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <!--比例尺-->
            <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-scale>
            <!--地图类型-->
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-map-type>
            <!--缩列图-->
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_LEFT" :isOpen="true"></bm-overview-map>
            <!--定位-->
            <bm-geolocation @locationSuccess="getLoctionSuccess" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--城市列表-->
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>

            <!--标记经度：113.27 纬度：23.14-->
            <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">

            </bm-marker>

            <bm-transit :start="inputst" :end="inputed" :auto-viewport="true" location="广州"></bm-transit>
        </baidu-map>
    </div>
</template>

<script>
    export default {
        name: "navigat",
        data() {
            return {
                center: {
                    lng: 113.27,
                    lat: 23.14
                },
                zoom: 15,
                inputst: '',
                inputed: ''
            }
        },
        methods: {
            getPosition(e) {
                // alert(`${e.point.lng} / ${e.point.lat}`);
                this.center.lng = e.point.lng;
                this.center.lat = e.point.lat;
            },
            souch() {
                console.log(this.inputst)
                console.log(this.inputed)
            },
            getLoctionSuccess(point, AddressComponent, marker) {
                console.log(point.point.lat)
                this.center.lng = point.point.lng;
                this.center.lat = point.point.lat;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 480px;
    }
    .top-wrap {
        width: 100%;
        height: 100px;
        background-color: aqua;
    }

    .std {
        width: 164px;
        height: 78px;
        margin-left: 78px;
        margin-top: 36px;
    }

    .end {
        width: 164px;
        height: 78px;
        margin-left: 28px;
        margin-top: 36px;
    }

    .btn {
        margin-left: 28px;
        margin-top: 36px;
    }
</style>