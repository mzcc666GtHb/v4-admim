<template>
    <div class="home">
        <div>
            <ul class="router-list">
                <li>
                    <MdTab></MdTab>
                    <MdPage></MdPage>
                    <router-link to="/about"></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.$xhr('book/book1',{
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
