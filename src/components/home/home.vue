<template lang="pug">
    .warp
        router-link(to="/item" v-html="data1")
</template>

<script>
export default {
  name:'home',
  methods: {
      start(){
          this.$router.go
      }
  },
  data(){
      return {
          data1:'开始'
      }
  }
}
</script>
<style lang="scss">
    *{
         margin: 0;
        padding: 0;
    }
    #app {
        width: 100%;
        height: 100%;
    }
    html,body {
        width: 100%;
        height: 100%;
        background: skyblue;
    }
    .warp {
        width: 100%;
        height: 100%;

    }

</style>

