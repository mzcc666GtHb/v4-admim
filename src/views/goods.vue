<template>
    <button>{{goodsNum}}</button>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "goods",
        computed:{
            ...mapState({
                goodsNum:state => state.goodsNum
            })
        }
    }
</script>

<style scoped>

</style>
