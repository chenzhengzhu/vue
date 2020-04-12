<template>
    <div id="pro-wrap">
        <div class="blocks" >
            <el-row class="zone">
                <el-row style="height: 410px">
                    <el-image
                            style="width: 100%; height: 300px"
                            :src="imgs[this.$route.query.name.productid-1].img"
                            fit="fill"></el-image>
                    <span style="margin-top: 15px;">{{this.$route.query.name.desc}}</span>
                </el-row>
                <el-row style="margin: 5px">
                    <span>￥{{this.$route.query.name.price}}</span>
                    <span style="float: right">{{this.$route.query.name.position}}</span>
                </el-row>
                <hr />
                <el-row style="float: right;">
                    <el-button class="count-btn" style="margin-right: 10px" @click="minu()" type="primary" circle>-</el-button>
                    <span style="border: 1px solid #000; margin-right: 10px"> {{count}}</span>
                    <el-button class="count-btn" style="margin-right: 20px" @click="add()" type="primary" circle>+</el-button>
                </el-row>
                <el-row style="margin-top: 50px">
                    <el-button class="btn1" @click="addCar()" type="success" round>添加到购物车</el-button>
                    <el-button class="btn2" @click="payfor()" type="success" round>直接购买</el-button>
                </el-row>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import { AddPdtToCar } from "../api/MyCar";
    import { addOrder } from  "../api/order";
    export default {
        name: "add_car",
        components: {ElRow},
        data() {
            return {
                count: this.$route.query.name.count === null ? 1: this.$route.query.name.count,
                // names: this.$route.query.name === null ? 0: this.$route.query.name,
                i: this.$route.query.name,
                imgs: [
                    { img: require("../image/wife.png")},
                    { img: require("../image/rice.png")},
                    { img: require("../image/chrken.png")},
                    { img: require("../image/rice_cake.png")},
                    { img: require("../image/fook.png")},
                    { img: require("../image/duck_feet.png")},
                    { img: require("../image/saltines.png")},
                    { img: require("../image/Smile.png")},
                    { img: require("../image/port_shop.png")}
                ]
            }
        },
        methods: {
            add (){
                this.count += 1;
            },
            minu() {
                this.count -= 1;
            },
            payfor() {
                var _this = this;
                addOrder({username: this.$store.state.usname, count: this.$route.query.name.count, comm:this.$route.query.name})
                    .then(function(response) {
                        if(response.data.code === "200") {
                            _this.$router.push({
                                path: '/order'
                            })
                        }
                    }).catch(function(error) {
                    console.log(error);
                });
                this.$alert("已下单", '扫码支付', {
                    callback: action => {
                    }
                });
            },
            addCar(){
                var _this = this;
                AddPdtToCar({count:this.count,username:this.$store.state.usname,
                    productid:this.$route.query.name.productid, price: this.$route.query.name.price})
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
        }
    }
</script>

<style lang="scss" scoped>
    .zone {
        margin: 20px;
        height: 577px;
        width: 25%;
        float: left;
        font-size: 20px;
        /*display: inline;*/
        border: 1px solid aqua;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .blocks {
        width: 100%;
        margin: 10px;
        height: 100vh;
    }
    .btn1 {
        position: relative;
        margin-top: 30px;
        margin-left: 10px;
        width: 120px;
    }

    .btn2 {
        float: right;
        position: relative;
        top: 30px;
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