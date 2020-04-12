<template>
    <div id="pro-wrap">
        <div class="blocks" >
            <el-row class="zone" v-for="(item, index) in imgs" :key="item.id" :index="index">
                <el-row style="height: 410px;">
                    <el-image
                            style="width: 100%; height: 300px"
                            :src="item.imgurl"
                            fit="fill"></el-image>
                    <span style="margin-top: 15px;">{{item.desc}}</span>
                </el-row>
                <el-row style="margin: 5px">
                    <span>￥{{item.price}}</span>
                    <span style="float: right">{{item.position}}</span>
                </el-row>
                <hr />
                <el-row>
                    <el-button class="btn" @click="addCar(item)" type="success" round>添加到购物车</el-button>
                    <el-button class="btn" @click="addCar(item)" type="success" round>直接购买</el-button>
                </el-row>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import {FindProductList} from "../api/Product";
    import { addOrder } from "../api/order";
    export default {
        name: "product",
        components: {ElRow},
        data() {
            return {
                imgs: []
            }
        },
        mounted:function () {
            this.getInit();
        },
        methods: {
            addCar(forName){
                this.$router.push({
                    path: '/addCars',
                    query: {
                        name: forName
                    }
                })
            },
            getInit() {
                var _this = this;
                FindProductList().then(function (response) {
                    _this.imgs = response.data;
                    /*for(var i=0; i<_this.imgs.length; i++) {
                        console.log(_this.imgs[i].imgurl);
                        _this.imgs[i].imgurl = require( _this.imgs[i].imgurl);
                    };*/
                    // _this.imgs[0].imgurl = require("../image/wife.png");
                    _this.imgs[0].imgurl = require("../image/wife.png");
                    _this.imgs[1].imgurl = require("../image/rice.png");
                    _this.imgs[2].imgurl = require("../image/chrken.png");
                    _this.imgs[3].imgurl = require("../image/rice_cake.png");
                    _this.imgs[4].imgurl = require("../image/fook.png");
                    _this.imgs[5].imgurl = require("../image/duck_feet.png");
                    _this.imgs[6].imgurl = require("../image/saltines.png");
                    _this.imgs[7].imgurl = require("../image/Smile.png");
                    _this.imgs[8].imgurl = require("../image/port_shop.png");
                }).catch(function (error) {
                    console.log(error)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .zone {
        margin: 20px;
        height: 547px;
        width: 21%;
        float: left;
        font-size: 20px;
        /*display: inline;*/
        border: 1px solid aqua;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .blocks {
        width: 100%;
        margin: 10px;
    }
    .btn {
        /*position: relative;
        !*margin-top: 70px;*!
        margin-right: 20px;
        margin-top: 20px;
        width: 114px;
        height: 46px*/
        margin-left: 10px;
        margin-top: 20px;
        width: 120px;
    }

    #pro-wrap {
        overflow-y: auto;
        height: 100vh;
        width: 100%;
    }
    .el-button {
        font-count: 20px;
    }

    /*.count-btn {
        width: 40px;
    }*/

</style>