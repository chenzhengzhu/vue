<template>
    <div id="pro-wrap">
        <div class="blocks" >
            <el-row class="zone">
                <el-row style="height: 410px">
                    <el-image
                            style="width: 100%; height: 300px"
                            :src="this.$route.query.name.imgurl"
                            fit="fill"></el-image>
                    <span style="margin-top: 15px;">{{this.$route.query.name.desc}}</span>
                </el-row>
                <el-row style="margin: 5px">
                    <span>￥{{this.$route.query.name.price}}</span>
                    <span style="float: right">{{this.$route.query.name.position}}</span>
                </el-row>
                <hr />
                <div style="width: 100%">
                    <el-row style="float: right; display: inline;">
                        <el-button class="count-btn" style="margin-right: 10px" @click="minu()" type="primary" circle>-</el-button>
                        <span style="border: 1px solid #000; margin-right: 10px"> {{count}}</span>
                        <el-button class="count-btn" style="margin-right: 20px" @click="add()" type="primary" circle>+</el-button>
                    </el-row>
                </div>
                <div>
                    <el-row>
                        <el-button class="btn1" @click="addCar()" type="success" round>添加到购物车</el-button>
                        <el-button class="btn2" type="success" round>直接购买</el-button>
                    </el-row>
                </div>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import {FindProductList} from "../api/Product";
    import { AddPdtToCar } from "../api/MyCar";
    export default {
        name: "add_cars",
        components: {ElRow},
        data() {
            return {
                count: 1,
                // names: this.$route.query.name === null ? 0: this.$route.query.name,
                // imgs: [],
                i: this.$route.query.name,
                // item: {},
            }
        },
        /*mounted:function () {
            this.getInit();
        },*/
        methods: {
            add (){
                this.count += 1;
            },
            minu() {
              this.count -= 1;
            },
            addCar(){
                var _this = this;
                AddPdtToCar({count:this.count,username:this.$store.state.usname, productid:this.$route.query.name.productid})
                    .then(function (response) {
                        if(response.data.code=="200") {
                            _this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                            });
                            _this.$router.push({
                                path: '/car'
                            })
                        } else {
                            _this.$message({
                                showClose: true,
                                message: '添加失败',
                                type: 'warning'
                            });
                        }

                    }).catch(function (error) {
                        console.log(error);
                    })
            }
            /*getInit() {
                var _this = this;
                FindProductList().then(function (response) {
                    _this.imgs = response.data;
                    _this.imgs[0].imgurl = require("../image/wife.png");
                    _this.imgs[1].imgurl = require("../image/rice.png");
                    _this.imgs[2].imgurl = require("../image/chrken.png");
                    _this.imgs[3].imgurl = require("../image/rice_cake.png");
                    _this.imgs[4].imgurl = require("../image/fook.png");
                    _this.imgs[5].imgurl = require("../image/duck_feet.png");
                    _this.imgs[6].imgurl = require("../image/saltines.png");
                    _this.imgs[7].imgurl = require("../image/Smile.png");
                    _this.imgs[8].imgurl = require("../image/port_shop.png");

                    _this.item = _this.imgs[_this.i];
                }).catch(function (error) {
                    console.log(error)
                });
            }*/
        }
    }
</script>

<style lang="scss" scoped>
    .zone {
        margin: 20px;
        height: 577px;
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
    .btn1 {
        position: relative;
        top: 60px;
        margin-left: 10px;
        width: 120px;
    }

    .btn2 {
        float: right;
        position: relative;
        top: 20px;
        width: 120px;
        margin-right: 10px;
    }

    #pro-wrap {
        overflow-y: auto;
        height: 100vh;
        width: 100%;
    }
    .el-button {
        font-count: 20px;
    }
</style>