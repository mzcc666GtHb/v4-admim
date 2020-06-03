<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                }
            }
        },
        mounted() {
        },
        computed: {
            ruleValidate () {
                const validates = {
                    name: [
                        { required: true, trigger: 'blur',validator:this.validatorName }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
                validates.gender = [
                    { required: true, trigger: 'blur' }
                ]
                return validates
            }
        },
        methods: {
            handleSubmit (name) {
                console.log(this.$refs[name]);
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.register()
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            changeCity(data) {
                console.log(data);
            },
            validatorName(rule, value, callback) {
                value ? callback() :  callback(new Error('error'));
            },
            register(params) {
                this.$request('users/register',params).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>
