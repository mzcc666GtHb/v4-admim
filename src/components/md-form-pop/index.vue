<template>
    <div class="box">
        <div class="tip" v-if="tip">{{tip}}</div>
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['tip']
    }
</script>

<style scoped>
    .box {
        position: relative;
    }

    .tip {
        position: absolute;
        top: -30px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid red;
        border-radius: 4px;
        color: red;
        text-align: center;
    }
</style>
