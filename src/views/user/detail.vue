<template>
    <div class="admin-content-wrap">
        <div class="admin-content">
            <div class="edit">
                <div class="avatar-box">
                    <div class="avatar" :style="{backgroundImage:`url(${avatar})`}">
                    </div>
                    <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png"
                           style="display:none" @change="changeImage($event)" ref="avatarInput">
                    <span class="edit-btn" @click="setAvatar">修改头像</span>
                </div>

            </div>
        </div>
        <img :src="imgSrc" alt="pic">
    </div>
</template>
<script>
    import  axios from  'axios'
    export default {
        data() {
            return {
                avatar: '',
                imgSrc:''
            }
        },
        methods: {
            edit() {
                // 修改了头像
                if (this.$refs.avatarInput.files.length !== 0) {
                    const image = new FormData();
                    image.append('files', this.$refs.avatarInput.files[0]);
                    axios.post(this.baseURL + '/api/file/upload',image,{
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }).then(res=>{
                        this.imgSrc = res.data.data.src;
                    })
                }
            },
            setAvatar() {
                this.$refs.avatarInput.click();
            },
            changeImage(e) {
                const file = e.target.files[0];
                const reader = new FileReader();
                const that = this;
                reader.readAsDataURL(file);
                reader.onload = function () {
                    that.avatar = this.result;
                    that.edit();
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar-box {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 1px solid #eee;
        overflow: hidden;
        text-align: center;
        background-color: skyblue;

        .avatar {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        .edit-btn {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .5);
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            cursor: pointer;
        }
    }
</style>
