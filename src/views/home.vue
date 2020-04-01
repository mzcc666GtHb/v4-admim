<template>
    <div class="home">
        <div>
            <ul class="router-list">
                <li>
                    <router-link to="/drag">drag</router-link>
                </li>
                <li>
                    <router-link to="/tree">tree</router-link>
                </li>
                <li>
                    <router-link to="/about">about111</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.$axios('book/book1',{
                start:3,
                count:30
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
        components: {}
    }
</script>
<style lang="less" scoped>
    .home {
        padding-top: 30px;
    }

    .router-list {
        li {
            text-align: center;
            height: 30px;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
</style>
