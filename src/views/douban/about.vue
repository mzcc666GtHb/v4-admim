<template>
    <div>
        <button @click="increment">按钮</button>
    </div>
</template>
<script>
    export default {
        name: 'about',
        data() {
            return {

            }
        },
        methods: {
            increment() {
                this.$store.commit('increment','23123123');
                this.$router.replace({
                    path:'/goods'
                })
            }
        }
    }
</script>
