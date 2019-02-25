<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/home/Header.vue';

  export default {
    name: 'home',
    data() {
      return {
        num: 0
      }
    },
    components: {
      Header,
    },
    methods: {
      add() {
        this.num = this.num + 1
      }
  }
}
</script>
