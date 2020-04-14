<template>
    <div>
        组件2
        <button @click ="addGoods(6)">添加购入车</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            addGoods(num) {
                this.$store.commit('increment',num);
            }
        }
    }
</script>

<style scoped>

</style>
