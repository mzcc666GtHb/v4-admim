<template>
    <ul class="list" id="list">
        <li v-for="(item,index) in items" :key="index">
            <p>
                <b>{{item.nm}}</b>
                <em>{{item.enm}}</em>
            </p>
            <div class="btns">
                <button class="btn_no" @click="btnUp(index)">
                    <i class="sprites_all sprites_up"></i>
                </button>
            </div>
            <div class="btns btn_move">
                <button class="btn_no">
                    <i class="sprites_all sprites_draw"></i>
                    <i class="sprites_all sprites_draw"></i>
                </button>
            </div>
        </li>
    </ul>
</template>
<script>
    import Sortable from 'sortablejs'
    export default {
        data() {
            return {
                uwasc:true,
                idx:'1',
                items: [{
                    id:1,
                    nm: '澳元日元0',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '-255%',
                    sel: false
                }, {
                    id:2,
                    nm: '澳元日元1',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:3,
                    nm: '澳元日元2',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:4,
                    nm: '澳元日元3',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:5,
                    nm: '澳元日元4',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:6,
                    nm: '澳元日元5',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:7,
                    nm: '澳元日元6',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:8,
                    nm: '澳元日元7',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:9,
                    nm: '澳元日元8',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:10,
                    nm: '澳元日元9',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }, {
                    id:11,
                    nm: '澳元日元10',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                } ,{
                    id:12,
                    nm: '澳元日元11',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                },{
                    id:13,
                    nm: '澳元日元12',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                },{
                    id:14,
                    nm: '澳元日元13',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                },{
                    id:15,
                    nm: '澳元日元14',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                },{
                    id:16,
                    nm: '澳元日元15',
                    enm: 'AUDJPY(2.6)',
                    price: 20.545,
                    up: '+255%',
                    sel: true
                }
                ],
            }
        },
        mounted () {
            var _this = this;
            var $ul = document.getElementById('list')
            new Sortable($ul, {
                delay: 1,
                onUpdate:function(event){
                    //修改items数据顺序
                    var newIndex = event.newIndex,
                        oldIndex = event.oldIndex,
                        $li = $ul.children[newIndex],
                        $oldLi = $ul.children[oldIndex];
                    // 先删除移动的节点
                    $ul.removeChild($li)
                    // 再插入移动的节点到原有节点，还原了移动的操作
                    if(newIndex > oldIndex) {
                        $ul.insertBefore($li,$oldLi)
                    } else {
                        $ul.insertBefore($li,$oldLi.nextSibling)
                    }
                    // 更新items数组
                    var item = _this.items.splice(oldIndex,1)
                    _this.items.splice(newIndex,0,item[0])
                    // 下一个tick就会走patch更新
                },
                animation: 150,
            })
        },
        methods:{
            btnUp(index){
                var item = this.items[index];
                this.items.splice(index,1);
                this.items.unshift(item);
            },

        }
    }
</script>
<style lang="less" scoped>
    .list{
        li{
            padding: 0 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #ddd;
            .btns{
                width: 20px;
                height: 20px;
                background-color: darkolivegreen;
            }
            .btn_move{
                background-color: rebeccapurple;
            }
        }

    }
</style>
