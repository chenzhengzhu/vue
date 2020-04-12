<template>
    <div style="overflow-y: auto">
        <div style="text-align: center; margin-top: 20px">
            <el-input v-model="tableDataName" placeholder="请输入商品名称" style="width:240px;margin-left: 60px; float: left"></el-input>
            <el-button style="margin-left: 50px; margin-bottom: 30px; float: left" type="primary" @click="doFilter">搜索</el-button>
            <el-button style="margin-left: 50px; float: left" type="primary" @click="openData">展示数据</el-button>
            <el-button style="margin-right: 50px;float: right" type="danger" @click="removeAll">清空</el-button>
            <el-button style="margin-right: 50px; float: right" type="warning" @click="changest">{{status}}</el-button>
            <el-button style="margin-right: 50px; float: right" type="success" @click="payfor">结算</el-button>
            <span style="margin-right: 50px; margin-top: 10px;text-align: center; float: right">总金额：{{allsum}}</span>

            <el-checkbox-group v-model="checkboxGroup">
                <el-table
                        :data="tableDataEnd"
                        border
                        style="width: 85%; text-align: center;margin-left: 70px;
                        height: 427px; overflow-y: auto">
                    <el-table-column width="80">
                        <template slot-scope="scope">
                            <el-checkbox :label="scope.row.id"></el-checkbox>
                        </template>
                    </el-table-column>

                    <!--<el-table-column prop="id" label="序号" width="60" />-->
                    <el-table-column prop="desc" label="商品" width="460" />
                    <el-table-column prop="price" label="价格" width="100" />
                    <el-table-column prop="count" label="数量" width="80" />
                    <el-table-column prop="sum" label="总金额" width="120" />

                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button style="margin: 10px; width: 80px; height: 40px"
                                       @click="edit(scope.row)" type="success" round>编辑</el-button>
                            <el-button style="margin: 15px;" @click="removeCar(scope.row)" type="danger" round>删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-checkbox-group>

            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 20, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalItems">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { QueryCar, RemoveCar, RemoveAllCar } from "../api/MyCar";
    import { addOrders } from  "../api/order";
    export default {
        name: "car",
        data() {
            return {
                allsum: 0,
                tableDataBegin: [],
                tableDataName: "",
                tableDataEnd: [],
                currentPage: 1,
                pageSize: 5,
                totalItems: 0,
                filterTableDataEnd:[],
                flag:false,
                status: "全选",
                st: false,
                checkboxGroup: [],
                tempdata: [],
                initcode: "https://www.baidu.com/"
            };
        },
        /*created() {
            this.getInit();
            alert(this.tableDataBegin);
            alert(1);

        },*/
        mounted:function () {
            this.getInit();
        },
        watch: {
            "st": function () {
                this.checkboxGroup = [];
                if(this.st) {
                    for(let i=0; i<this.tableDataEnd.length; i++) {
                        this.checkboxGroup.push(this.tableDataEnd[i].id);
                    }
                } else {
                    this.checkboxGroup = [];
                }
            },
            "checkboxGroup": function () {
                this.allsum = 0;
                this.tempdate = [];
                for(let i=0; i<this.checkboxGroup.length; i++) {
                    for(let t=0; t<this.tableDataEnd.length; t++) {
                        if(this.checkboxGroup[i] === this.tableDataEnd[t].id) {
                            this.allsum  += this.tableDataEnd[t].sum;
                            this.tempdate.push(this.tableDataEnd[t])
                        }
                    }
                }
            }
        },
        methods: {

            getInit() {
                var _this = this;
                QueryCar({ username: this.$store.state.usname}).then(function (response) {
                    _this.tableDataBegin = response.data.data;
                    _this.totalItems = _this.tableDataBegin.length;
                    if (_this.totalItems > _this.pageSize) {
                        for (let index = 0; index < _this.pageSize; index++) {
                            _this.tableDataBegin[index].id = index + 1;
                            _this.tableDataEnd.push(_this.tableDataBegin[index]);
                        }
                    } else {
                        // _this.tableDataEnd = _this.tableDataBegin;
                        for (let index = 0; index < _this.totalItems; index++) {
                            _this.tableDataBegin[index].id = index + 1;
                            _this.tableDataEnd.push(_this.tableDataBegin[index]);
                        }
                    };
                }).catch(function (error) {
                    console.log(error)
                });
            },

            //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
            //用两个变量接收currentChangePage函数的参数
            doFilter() {
                if (this.tableDataName == "") {
                    this.$message.warning("查询条件不能为空！");
                    return;
                }
                this.tableDataEnd = []
                //每次手动将数据置空,因为会出现多次点击搜索情况
                this.filterTableDataEnd=[]
                this.tableDataBegin.forEach((value, index) => {
                    if(value.desc){
                        if(value.desc.indexOf(this.tableDataName)>=0){
                            this.filterTableDataEnd.push(value)
                            // this.tableDataEnd.push(value)
                        }
                    }
                });
                //页面数据改变重新统计数据数量和当前页
                this.currentPage=1
                this.totalItems=this.filterTableDataEnd.length
                //渲染表格,根据值
                this.currentChangePage(this.filterTableDataEnd)
                //页面初始化数据需要判断是否检索过
                this.flag=true
            },
            changest() {
                this.st = !this.st;
                if(this.st === false) {
                    this.status = "全选";
                } else {
                    this.status = "全不选";
                }
            },
            edit(forName) {
                this.$router.push({
                    path: '/addCar',
                    query: {
                        name: forName
                    }
                })
            },
            payfor() {
                // alert("支付");
                // alert(this.$res);
                /*this.$router.replace({
                    path: '/applyText',
                    query: {html: res.data.data}
                })*/
                var _this = this;
                addOrders({comm:this.tempdate})
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
                        /*this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });*/
                    }
                });
            },
            removeCar(forName) {
                var _this = this;
                RemoveCar({ productid: forName.productid, username: this.$store.state.usname}).then(function (response) {
                    _this.tableDataEnd = [];
                    _this.getInit();
                }).catch(function (error) {
                    console.log(error)
                });
            },
            removeAll() {
                var _this = this;
                RemoveAllCar({ username: this.$store.state.usname}).then(function (response) {
                    _this.tableDataEnd = [];
                    _this.getInit();
                }).catch(function (error) {
                    console.log(error)
                });
            },
            openData() {
                this.tableDataEnd = [];
                this.getInit();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
                this.handleCurrentChange(this.currentPage);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                //需要判断是否检索
                if(!this.flag){
                    this.currentChangePage(this.tableDataBegin)
                }else{
                    this.currentChangePage(this.filterTableDataEnd)
                }
            }, //组件自带监控当前页码
            currentChangePage(list) {
                let from = (this.currentPage - 1) * this.pageSize;
                console.log(from)
                let to = this.currentPage * this.pageSize;
                this.tableDataEnd = [];
                for (let i = 1; from < to; from++) {
                    if (list[from]) {
                        list[from].id = i++;
                        this.tableDataEnd.push(list[from]);
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    el-table-column {
        padding: 10px;
    }
    .el-table td {
        text-align: center;
    }
</style>