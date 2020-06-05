<template>
    <div class="register-wrap">
        <div class="register-box">
            <Form ref="formValidate" :model="formValidate" :rules="loginValidators" :label-width="80">
                <FormItem label="用户名" prop="user_name">
                    <Input v-model="formValidate.user_name" placeholder="请输入姓名"/>
                </FormItem>
                <FormItem label="密码" prop="user_password" v-if="showPassWord">
                    <Input v-model="formValidate.user_password" type="password" placeholder="请输入密码"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import mixins from "../../mixins";
    export default {
        data() {
            return {
                showPassWord: true,
                formValidate: {
                    user_name: '',
                    user_password: ''
                }
            }
        },
        mixins: [mixins.asyncValidators],
        computed: {
          loginValidators () {
             return  this.validators;
          }
        },
        mounted() {
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                        const {data} = await this.register(this.formValidate);
                        if (data.success) {
                            this.$Message.success('登录成功');
                        } else {
                            this.$Message.info(data.msg);
                        }
                    } else {
                        this.$Message.error('请检查必填项');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            changeCity(data) {
                console.log(data);
            },
            async register(params) {
                return this.$request('users/login', params).then(res => {
                    return res;
                })
            }
        }
    }
</script>

<style scoped>
    .register-wrap {
        margin-top: 50px;
        padding: 20px 50px 0 20px;
    }

    .register-box {
        width: 400px;
        padding: 60px 30px 20px 10px;
        border: 1px solid #ddd;
    }
</style>
