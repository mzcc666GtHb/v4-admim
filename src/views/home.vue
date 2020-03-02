<template>
  <div class="home">
    <div>
      <ul class="router-list">
        <li>
          <router-link to="/drag">drag</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="less" scoped>
  .home{
    padding-top: 30px;
  }
  .router-list{
    li{
      text-align: center;
      height: 30px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
</style>
