<template>
    <div class="home">
        <div>
            <dl>
                <dt>组件</dt>
                <dd>
                    <MdTab></MdTab>
                </dd>
                <br>
                <br>
                <dd>
                    <MdPage></MdPage>
                </dd>
                <dt>路由</dt>
                <dd>
                    <router-link tag="div" to="/about">关于</router-link>
                </dd>
                <dd>
                    <router-link tag="div" to="/goods/detail">详情</router-link>
                </dd>
                <dd>
                    <router-link tag="div" to="/goods/list">列表</router-link>
                </dd>
                <dt>过滤器</dt>
                <dd><span>{{name | placeholder('非常好呢')}}</span></dd>
                <img :src="imgSrc" alt="">
            </dl>
        </div>
    </div>
</template>

<script>
    import mixins from '../../mixins'
    export default {
        name: 'home',
        data() {
            return {
                name: '',
                imgSrc: require('../../assets/images/timg.jpeg')
            }
        },
        mixins:[mixins.page],
        created() {
            let imgUrl = 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg';
           this.$tools.imgIsLoaded(imgUrl).then(res=>{
                if(res) {
                    this.imgSrc = imgUrl;
                }else{
                    alert('出错了');
                }
            });
            this.$request('book/book1', {
                start: 3,
                count: 30
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>
<style lang="less" scoped>
    .home {
        padding: 30px;
    }
</style>
