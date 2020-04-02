<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">
                    {{item.txt}}
                </li>
            </ul>

        <!--表单 start-->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">

                <el-form-item  prop="username" class="item-form">
                    <label>用户名</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item  prop="pwd" class="item-form">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="passwords" class="item-form" v-if="model === 'register'">
                    <label>重复密码</label>
                    <el-input type="password" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <!--<el-form-item  prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code" minlength="4" maxlength="4"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block" @click="getCodes()">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>-->

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn block" v-if="model === 'login'">登录</el-button>
                    <el-button type="danger" @click="registerForm('ruleForm')" class="login-btn block" v-if="model === 'register'">注册</el-button>
                </el-form-item>
            </el-form>
        <!--表单 end-->
        </div>
    </div>
</template>

<script>
    import { Tologin,ToRegister } from "../api/login";
    import { reactive, ref, isRef, onMounted } from "@vue/composition-api"
    export default {
        inject: ['reload'],
        name: "login",

        //存放data， 生命周期，自定义函数
        setup(props, { refs, root }) {

            //验证用户名
            let validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            //验证密码
            let validatePwd = (rule, value, callback) => {
                let reg = /^(?![^a-zA-Z0-9]+$)\S{6,20}$/
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (!reg.test(value)) {
                    callback(new Error('密码为6至20位的数字或字符'))
                }else {
                    callback();
                }
            };
            //验证重复密码
            let validatePwds = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== ruleForm.pwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            //校验验证码
            let checkCode = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error('请输入验证码'));
                } else {
                    callback()
                }
            };

            const menuTab = reactive([
                    {txt: '登录', current: true, type: 'login'},
                    {txt: '注册', current: false, type: 'register'}
                    ]);

            const model = ref('login');

            //表单的数据
            const ruleForm = reactive( {
                username: '',
                pwd: '',
                passwords: '',
                code: ''
            })

        //表单验证
            const rules = reactive({
                username: [
                    { validator: validateName, trigger: 'blur' }
                ],
                pwd: [
                    { validator: validatePwd, trigger: 'blur' }
                ],
                passwords: [
                    { validator: validatePwds, trigger: 'blur'}
                ],
                code: [
                    { validator: checkCode, trigger: 'blur' }
                ]
            })

            /**
             * 声明函数
             */
             const toggleMenu = (data => {
                menuTab.forEach(elem=>{
                    elem.current=false
                })
                data.current=true
                //修改模块的值
                model.value = data.type

                //切换菜单事，重置内容
                refs.ruleForm.resetFields()
            })

            const submitForm = (formName => {

                if(ruleForm.username === '') {
                    root.$message({
                        showClose: true,
                        message: '用户名不能为空',
                        type: 'warning'
                    });
                    return false
                }
                if(ruleForm.pwd === '') {
                    root.$message({
                        showClose: true,
                        message: '密码不能为空',
                        type: 'warning'
                    });
                    return false
                }
                refs[formName].validate((valid) => {
                    if (valid) {
                        Tologin(ruleForm).then(function (response) {
                            if(response.data) {
                                root.$message({
                                    showClose: true,
                                    message: '登录成功',
                                    type: 'success'
                                });
                                root.$store.commit('SET_NAME', ruleForm.username);

                                //页面跳转
                                root.$router.push({
                                    path: '/index',
                                })
                            } else {
                                root.$message({
                                    showClose: true,
                                    message: '用户名或密码有误',
                                    type: 'warning'
                                });
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            })

            let isRouterAlive = false

            const registerForm = (formName => {
                if(ruleForm.username === '') {
                    root.$message({
                        showClose: true,
                        message: '用户名不能为空',
                        type: 'warning'
                    });
                    return false
                }
                if(ruleForm.pwd === '') {
                    root.$message({
                        showClose: true,
                        message: '密码不能为空',
                        type: 'warning'
                    });
                    return false
                }

                if(ruleForm.passwords === '') {
                    root.$message({
                        showClose: true,
                        message: '验证密码不能为空',
                        type: 'warning'
                    });
                    return false
                }
                refs[formName].validate((valid) => {
                    if (valid) {
                        ToRegister(ruleForm).then(function (response) {
                            if(response.data) {
                                root.$message({
                                    showClose: true,
                                    message: '注册成功',
                                    type: 'success'
                                });
                                root.reload
                                refs.ruleForm.resetFields()
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            })

            /**
             * 生命周期
             */
            //挂载完成后
            onMounted(() => {

            })

            return {
                model,
                menuTab,
                rules,
                ruleForm,
                toggleMenu,
                submitForm,
                registerForm
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        height: 100vh;
        background-color: #344a5f;
        background-image: url("../image/bg.jpg");
        background-repeat: repeat-x;
        background-size: cover;
    }
    .login-wrap{
        width: 330px;
        margin: auto;
    }
    .menu-tab{
        text-align: center;
        li {
            margin-top: 200px;
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 24px;
            color: #fff;
            border-radius: 2px;
            cursor: pointer;
        }
    }

    .current {
        background-color: #000000;
    }

    .login-form {
        label {
            display: block;
            font-size: 14px;
            color: #fff;
        }
    }

    .item-form {
        margin-bottom: 13px;
    }

    .block {
        display: block;
        width: 100%;
    }
    .login-btn {
        margin-top: 20px;
    }
</style>