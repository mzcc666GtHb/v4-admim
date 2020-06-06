<template>
    <div class="sign-wrap">
        <div class="sign-box">
            <div class="sign-title">
                <span>注册</span>
            </div>
            <div class="sign-form">
                <Form ref="formValidate" :model="formValidate" :rules="validators" :label-width="80">
                    <FormItem label="姓名" prop="user_name">
                        <Input v-model="formValidate.user_name" placeholder="请输入姓名"/>
                    </FormItem>
                    <FormItem label="邮箱" prop="user_email">
                        <Input v-model="formValidate.user_email" placeholder="请输入邮箱"/>
                    </FormItem>
                    <FormItem label="密码" prop="user_password">
                        <Input type="password" v-model="formValidate.user_password" placeholder="请输入密码"/>
                    </FormItem>
                </Form>
            </div>
            <div class="sign-sub-btn">
                <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            </div>
        </div>
    </div>
</template>
<script>
    import mixins from '../../mixins';
    export default {
        data () {
            return {
                formValidate: {
                    user_name: '',
                    user_email: '',
                    user_password:''
                },
                registerValidators:{}
            }
        },
        mixins:[mixins.asyncValidators],
        methods: {
            handleSubmit (name) {
                console.log(this.$refs[name]);
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                        const  {data} = await  this.register(this.formValidate);
                        if(data.success) {
                            this.$Message.success('注册成功');
                            setTimeout(() => {
                                this.$router.replace('/login');
                            },1500)
                        }else{
                            this.$Message.info(data.msg);
                        }
                    } else {
                        this.$Message.error('请检查必填项!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            changeCity(data) {
                console.log(data);
            },
            async register(params) {
                return this.$request('user/register',params).then(res => {
                    return res;
                })
            }
        }
    }
</script>
