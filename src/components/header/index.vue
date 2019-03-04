<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">概览</el-menu-item>
      <el-menu-item index="2">待处理</el-menu-item>
      <el-menu-item index="3">上报</el-menu-item>
      <el-menu-item index="4">用户</el-menu-item>
    </el-menu>
    <router-view />
  </div>

</template>

<script>
  export default {
    name: "header_",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        switch(key){
          case '1':
            this.$router.push('/home');
            break;
          case '2':
            this.$router.push('/todo');
                break;
          case '3':
            this.$router.push('/report');
            break;
          case '4':
            this.$router.push('/user');
            break;
          default:
            this.$router.push('/notFound')
        }
      }
    }
  }
</script>

<style scoped>

</style>
