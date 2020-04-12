<template>
    <!--<div v-html='apply'>
        {{apply}}
    </div>-->
    <!--<div>
        <qriously :value="initcode" :size="254"></qriously>
    </div>-->

    <!--<el-dialog
            title="查看广告内容"
            :visible.sync="QRcode.dialogVisible"
            :close-on-click-modal="false"
            width="350px"
            height="520px"
            @open="openQrCode"
    >
        <div class="qrcode" v-loading="QRcode.qrLoading">

            <div id="qrcode"></div>
        </div>

    </el-dialog>-->
    <!--<div class="amap-page-container">
        <el-amap vid="amap" :plugin="plugin" :events="events" class="amap" :center="center" :zoom="zoom">
            <el-amap-marker :position="center" vid="AMapManager"></el-amap-marker>
        </el-amap>

        <div class="toolbar">
            <button @click="getMap()">get map</button>
        </div>
    </div>-->
    <div>
        <baidu-map class="map" center="广州" :scroll-wheel-zoom="true"></baidu-map>
    </div>
</template>

<script>
    import { AMapManager } from 'vue-amap';
    export default {
        name: "test",
        /*data: function() {
            return {
                AMapManager,
                zoom: 12,
                center: [121.59996, 31.197646],
                events: {
                    init: (o) => {
                        console.log(o.getCenter())
                        console.log(this.$refs.map)
                        o.getCity(result => {
                            console.log(result)
                        })
                    },
                    'moveend': () => {
                    },
                    'zoomchange': () => {
                    },
                    'click': (e) => {
                        alert('map clicked');
                    }
                },
                plugin: ['ToolBar', {
                    pName: 'MapType',
                    defaultType: 0,
                    events: {
                        init(o) {
                            console.log(o);
                        }
                    }
                }]
            };
        },*/
        /*methods: {
            getMap() {
                // amap vue component
                console.log(AMapManager._componentMap);
                // gaode map instance
                console.log(AMapManager._map);
            },

            /!*qrCode() {
                var _this = this;
                console.log($("#qrcode"));
                $("#qrcode").qrcode({
                    render: "canvas",
                    text: "http://www.baidu.com?id=",
                    width: "200", //二维码的宽度
                    height: "200", //二维码的高度
                    background: "#ffffff", //二维码的后景色
                    foreground: "#000000", //二维码的前景色
                    src: "img/gray.jpg" //二维码中间的图片
                });
            },*!/

        }*/
        /*data() {
            return {
                initcode: "https://www.baidu.com/"
            }
        }*/
        /*data() {
            return {
                apply: ''
            }
        },
        mounted() {
            let form = this.$route.query.html;
            this.apply = form;
            this.$nextTick(() => {
                document.forms [0].submit()
            })
        }*/
    }
</script>

<style lang="scss" scoped>
    .amap-demo {
         height: 300px;
     }

    .bm-view {
        width: 100%;
        height: 300px;
    }
    .map {
        width: 100%;
        height: 400px;
    }


</style>