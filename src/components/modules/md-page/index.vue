<template>
    <div>
        购物车数量
        {{num}}
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {

            }
        },
        computed:{
            num () {
               return  this.$store.state.goodsNum
            }
        }
    }
</script>

<style scoped>

</style>
