<template>
    <div>
        <treeselect v-model="value"
                    @open="openItem"
                    :normalizer="normalizer"
                    :multiple="true"
                    :searchable="false"
                    :openDirection="'bottom'"
                    :alwaysOpen = "true"
                    :load-options="loadOptions"
                    valueFormat="object"
                    :options="options">
            <label slot="option-label" slot-scope="{node,labelClassName}" :class="labelClassName">
                <div class="option-label">
                    <img v-if="node.raw.type === 'ORG' " width="30" height="30" src="../assets/iocn-file.png" alt="pic">
                    <img v-else width="30" height="30" :src="node.raw.image" alt="pic">
                    <span class="option-label-title">{{node.label}}</span>
                </div>
            </label>
        </treeselect>
        <button @click="getValue">GET-VALUE</button>
    </div>


</template>

<script>
    // import the component
    import axios from 'axios';
    import Treeselect from '../components/tree'
    import {LOAD_CHILDREN_OPTIONS} from '../components/tree'
    // import the styles
    export default {
        name: "tree",
        data() {
            return {
                // define the default value
                value: null,
                // define options,
                options: []
            }
        },
        mounted() {
            this.getOutermostOrg();
        },
        components: {
            Treeselect
        },
        methods: {
            getValue() {
                console.log(this.value);
            },
            getOrg(poid) {
                return new Promise((resolve, reject) => {
                    axios({
                        method: 'post',
                        url: 'http://10.0.20.196:16000/problemtemplate/findOrgs',
                        data: {
                            "poId": poid,
                            userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxNTQyMTM4OTE0MjcwIiwiZXhwVGltZSI6MTU4NDA2ODA2MTg4OSwic2VydmVyRGlkIjoiYTkwODU4ZTg5MWJiNjcyOThjNzBjMzE2MTJjNzcyYjQxY2E1YTEzZDY2NTkzMzRhMWYxNjIyOTg4NTdkYjQxNzgzN2FjOGYxOTgzYzZiOGQ4Njg0ODdlMjY5OTA0MjZiZTY3YjcxMjJiMmUxY2ZkNDlmMzJjNWUzYjhiY2QyNzEifQ.s-2R2-jq2Y977ZmEkXxklkIP2RUP49E1Zvs-RcW3-0A'
                        }
                    }).then(res => {
                        resolve(res.data.data || [])
                    }).catch(err => {
                        reject(err);
                    })
                })
            },
            getOutermostOrg() {
                this.getOrg('0').then(res => {
                    res.forEach(item => {
                        if (item.childs) {
                            item.children = null;
                        }
                    });
                    this.options = res;
                })
            },
            openItem(data) {
                console.log(data);
            },
            normalizer(node) {
                console.log(node);
                return {
                    id: node.code,
                    label: node.name,
                    children: node.children,
                    optionType:node.type
                }
            },
            loadOptions({action, parentNode, callback}) {
                // Typically, do the AJAX stuff here.
                // Once the server has responded,
                // assign children options to the parent node & call the callback.
                if (action === LOAD_CHILDREN_OPTIONS) {
                    switch (parentNode.childs) {
                        case true: {
                            let children = [];
                            // if(parentNode.userVoTypes) {
                            //     parentNode.userVoTypes.forEach(item =>{
                            //         item.code = item.userId
                            //     })
                            //     children = parentNode.userVoTypes
                            // }else{
                            //     children = [];
                            // }
                            this.getOrg(parentNode.oid).then((res) => {
                                res.forEach(item => {
                                    if (item.childs) {
                                        item.children = null;
                                    } else {
                                        if (item.userVoTypes) {
                                            item.userVoTypes.forEach(item => {
                                                item.code = item.userId
                                            })
                                            item.children = item.userVoTypes
                                        }
                                    }
                                })
                                children = [...children, ...res];
                                parentNode.children = children;
                                callback()
                            })
                            break
                        }
                        case 'false': {
                            console.log(23);
                            callback()
                            break
                        }
                        case 'failure': {
                            callback(new Error('Failed to load options: network error.'))
                            break
                        }
                        default: /* empty */
                    }
                }
            }
        }
    }
</script>

<style>
    .vue-treeselect__menu {
        height: 100vh !important;
        max-height: none !important;
    }
    .option-label{
        display: flex;
        align-items: center;
    }
    .option-label-title{
        margin-left: 5px;
    }
</style>
