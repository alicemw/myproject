<template lang="pug">
    h1 你的分数是{{fen}}
</template>

<script>
export default {
  name:'scroe',
  data(){
      return {

      }
  },
  computed:{
      fen(){
          return this.$store.state.score;
      }
  }
}
</script>
