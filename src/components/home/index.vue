<template>
  <div>
    <h3>Main</h3>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {

    },
    mounted(){
      console.log(this)
      this.$http.get('/homeData')
        .then((data) => {
          console.log(data)
        }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>

</style>
