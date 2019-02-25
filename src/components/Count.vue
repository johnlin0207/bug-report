<template>
  <div>
    <Button @click="$emit('my-event')">+</Button>
    <h1>{{this.num}}</h1>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: "count",
    props: {
      num: Number
    },
    method: {

    }
  }
</script>

<style scoped>

</style>
