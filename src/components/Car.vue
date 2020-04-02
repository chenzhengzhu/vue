<template>
    <div id="app-container">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <div style="margin-top:30px">
                <el-input v-model="tableDataName" placeholder="请输入商品名" style="width:440px;margin-right: 100px"/>
                <el-button @click="doFilter" type="primary">搜索</el-button>
            </div>

            <table class="xlz">
                <tr class="hd">
                    <td width="20px"></td>
                    <td style="width: 80px; margin-left: 50px">序号</td>
                    <td>商品</td>
                    <td style="width: 60px">价格</td>
                    <td style="width: 60px">数量</td>
                    <td style="width: 60px">总金额</td>
                    <td style="width: 180px">操作</td>
                </tr>
                <tr v-for="item in tableDataEnd" :key="item.id" style="height: 40px">
                    <td><el-checkbox></el-checkbox></td>
                    <td style="width: 80px; margin-left: 50px">{{ item.id }}</td>
                    <td>{{ item.desc }}</td>
                    <td style="width: 60px"> {{ item.price }}</td>
                    <td style="width: 60px">{{ item.count }}</td>
                    <td style="width: 60px">{{item.sum}}</td>
                    <td style="width: 180px">
                        <el-button type="success" size="small" round>编辑</el-button>
                        <el-button type="danger" size="small" round>删除</el-button>
                    </td>
                </tr>
                <tr></tr>
            </table>

        </el-form>

        <el-pagination
                :current-page="currentPage"
                :page-sizes="[2, 4, 6, 8]"
                :page-size="pageSize"
                :total="totalItems"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"/>
    </div>
</template>
<script>
    export default {
        name: "car",
        data() {
            return {
                datas: [
                    {id: 1, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 2, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 3, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 4, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 5, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 6, desc: 123456, price: 10, count: 23, sum: 200},
                    {id: 7, desc: 123456, price: 10, count: 23, sum: 200}
                ],
                formInline: {
                    user: '',
                    region: ''
                },
                tableDataName: '',
                tableDataEnd: [],
                currentPage: 1,
                pageSize: 4,
                totalItems: 0,
                filterTableDataEnd: [],
                flag: false
            }
        },
        created() {
            this.totalItems = this.datas.length
            if (this.totalItems > this.pageSize) {
                for (let index = 0; index < this.pageSize; index++) {
                    this.tableDataEnd.push(this.datas[index])
                    console.log(this.datas[index]);
                }
            } else {
                this.tableDataEnd = this.datas
            }
        },
        methods: {
            // 前端搜索功能需要区分是否检索,因为对应的字段的索引不同
            // 用两个变量接收currentChangePage函数的参数
            doFilter() {
                if (this.tableDataName === '') {
                    this.$message.warning('查询条件不能为空!')
                    return
                }
                this.tableDataEnd = []
                // 每次手动将数据置空,因为会出现多次点击搜索情况
                this.filterTableDataEnd = []
                this.datas.forEach((value, index) => {
                    if (value.name) {
                        if (value.name.indexOf(this.tableDataName) >= 0) {
                            this.filterTableDataEnd.push(value)
                        }
                    }
                })
                // 页面数据改变重新统计数据数量和当前页
                this.currentPage = 1
                this.totalItems = this.filterTableDataEnd.length
                // 渲染表格,根据值
                this.currentChangePage(this.filterTableDataEnd)
                // 页面初始化数据需要判断是否检索过
                this.flag = true
            },
            // openData() {},
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`)
                this.pageSize = val
                /* this.handleCurrentChange(this.currentPage) */
                this.handleCurrentChange(1)
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`)
                this.currentPage = val
                // 需要判断是否检索
                if (!this.flag) {
                    /* this.currentChangePage(this.tableDataEnd) */
                    this.currentChangePage(this.datas)
                } else {
                    this.currentChangePage(this.filterTableDataEnd)
                }
            }, // 组件自带监控当前页码
            currentChangePage(list) {
                let from = (this.currentPage - 1) * this.pageSize
                const to = this.currentPage * this.pageSize
                this.tableDataEnd = []
                for (; from < to; from++) {
                    if (list[from]) {
                        this.tableDataEnd.push(list[from])
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #app-container {
        text-align: center;
    }

    .el-button {
        width: 80px;
    }

    .xlz {
        margin-left: 70px;
        width: 86%;
        height: 500px;
        border: 1px solid #000;
        overflow-y: auto;
    }

    .hd {
        height: 35px;
    }

    td {
        margin: 0px;
        padding: 0px;
        border: 1px solid #000;
    }
</style>