<template>
    <div class="sign-wrap">
        <div class="sign-box">
            <div class="sign-title">
                <span>登录</span>
            </div>
            <div class="sign-form">
                <Form ref="formValidate" :model="formValidate" :rules="loginValidators" :label-width="80">
                    <FormItem label="用户名" prop="user_name">
                        <Input v-model="formValidate.user_name" placeholder="请输入姓名"/>
                    </FormItem>
                    <FormItem label="密码" prop="user_password" v-if="showPassWord">
                        <Input v-model="formValidate.user_password" type="password" placeholder="请输入密码"/>
                    </FormItem>
                </Form>
            </div>
            <div class="sign-sub-btn">
                <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
            </div>
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
        mixins:[mixins.asyncValidators],
        computed: {
          loginValidators () {
              let loginValidators = Object.assign({},this.validators);
              loginValidators.user_password = [
                 { required: true, trigger: 'blur',message:'请输入密码'}
             ];
              return loginValidators;
          }
        },
        mounted() {
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                        const data = await this.register(this.formValidate);
                        console.log(data);
                        if (data.success) {
                            const token = data.data.token;
                            this.$storage.set('token', token);
                            this.$Message.success(data.msg);
                            setTimeout(()=>{
                                this.$router.push({
                                    path:'/'
                                })
                            },1500)
                        }else{
                            this.$Message.error(data.msg);
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
                return this.$request('user/login', params).then(res => {
                    return res.data;
                })
            }
        }
    }
</script>
