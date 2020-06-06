<template>
    <div>
        用户列表
    </div>
</template>

<script>
    export default {
        name: "list",
        created() {
            this.getUserList();
        },
        methods: {
            async getUserList() {
                const res = await this.$request('user/list').then(res => {
                    return res;
                });
                console.log(res);
            }
        }
    }
</script>

<style scoped>

</style>
