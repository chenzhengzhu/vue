<template>
    <div id="in-wrap">
        <div id="lunbotu">
            <div id="banner">
                <img class="m" :src="img" />
            </div>
        </div>
        <div class="sigh">
            <img style="float:left; margin-top: 50px; margin-left: 80px" src="../image/index/A1(4).jpg"/>
            <img style="float:right; margin-top: 50px; margin-left: 20px; margin-right: 80px" src="../image/index/A1(5).jpg"/>
        </div>
        <div class="Nav">
            <span style="margin-left: 80px; font-size: 20px">广州是继北京、上海之后的中国第三大城市，被称为“第三世界首都”。</span>
            <br />
            <br />
            <span style="font-size: 18px; margin-left: 30px">{{msg1}}</span>
            <br />
            <br />
            <span style="font-size: 18px; margin-left: 30px">{{msg2}}</span>
            <br />
            <br />
            <span style="font-size: 18px; margin-left: 30px">{{msg3}}</span>
            <br />
            <br />
            <span style="font-size: 18px; margin-left: 30px">{{msg4}}</span>
        </div>

        <div class="btm">
            <img style="float:left; margin-left: 40px" src="../image/index/A2(2).jpg"/>
            <img style="float:right; margin-left: 40px; margin-right: 40px" src="../image/index/A2.jpg"/>
            <img style="float:right; margin-right: 40px" src="../image/index/A3.jpg"/>
        </div>

        <div class="bottom">
            <ul style="float: right">
                <li>地址：广东省广州市中山大道西xxx号</li>
                <li>手机号码：156xxxx9699</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            var msg1 = "广州，简称“穗”，别称羊城、花城，是广东省省会、副省级市、国家中心城市、超大城市，" +
                "国务院批复确定的中国重要的中心城市、国际商贸中心和综合交通枢纽。" +
                "截至2018年，全市下辖11个区，总面积7434平方千米，建成区面积1249.11平方千米，" +
                "常住人口1530.59万人，城镇化率86.46%。 ";

            var msg2 = "广州地处中国南部、珠江下游、濒临南海，是中国南部战区司令部驻地，" +
                "国家物流枢纽，国家综合性门户城市，首批沿海开放城市，是中国通往世界的南大门，" +
                "粤港澳大湾区、泛珠江三角洲经济区的中心城市以及一带一路的枢纽城市。";

            var msg3 = "广州是首批国家历史文化名城，广府文化的发祥地，从秦朝开始一直是郡治、州治、府治的所在地，" +
                "华南地区的政治、军事、经济、文化和科教中心。从公元三世纪起成为海上丝绸之路的主港，" +
                "唐宋时成为中国第一大港，是世界著名的东方港市，明清时是中国唯一的对外贸易大港，" +
                "也是世界唯一两千多年长盛不衰的大港。";

            var msg4 = "广州被全球权威机构GaWC评为世界一线城市，每年举办的中国进出口商品交易会吸引了大量客商以及大量外资企业、" +
                "世界500强企业的投资，国家高新技术企业达8700多家，总量居全国前三，集结了全省80%的高校、70%的科技人员，" +
                "在校大学生总量居全国第一。广州人均住户存款均居全国前三位，人均可支配收入居全省第一位。广州人类发展指数居中国第一位，" +
                "国家中心城市指数居中国第三位。福布斯2017年“中国大陆最佳商业城市排行榜”居第二位；中国百强城市排行榜居第三位。";

            return {
                img: require("../image/index/A1(1).jpg"),
                i: 1,
                msg1,
                msg2,
                msg3,
                msg4
            }
        },
        watch: {
            "i": function () {
                console.log(this.i);
                if(this.i === 1) {
                    this.img = require("../image/index/A1(1).jpg");
                } else if(this.i === 2) {
                    this.img = require("../image/index/A1(2).jpg");
                } else if(this.i === 3) {
                    this.img = require("../image/index/A1(3).jpg");
                }
            }
        },
        mounted:function () {
            this.auto();
        },
        methods: {
            auto(){
                var _this = this;
                this.time = setInterval(function () {
                    _this.changePhotograph()
                },3000);

            },
            changePhotograph(){
                this.i++;
                if(this.i === 4) {
                    this.i = 1;
                }
                if(this.i === 1) {
                    this.img = require("../image/index/A1(1).jpg");
                } else if(this.i === 2) {
                    this.img = require("../image/index/A1(2).jpg");
                } else if(this.i === 3) {
                    this.img = require("../image/index/A1(3).jpg");
                }
            }

        },
    }
</script>
<style lang="scss" scoped>

    #in-wrap {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    #lunbotu {

    }

    #banner {
        text-align: center;
    }

    #banner img {
        margin-top: 20px;
        width: 1100px ;
        height: 500px;
    }

    .sigh {
        width: 100%;
        height: 570px;
    }

    .Nav {
        width: 100%;
        height: 470px;
        text-align: center;
    }

    .btm {
        width: 100%;
        height: 500px;
    }

    .btm img {
        height: 400px;
    }
</style>