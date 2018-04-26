<template lang="pug">
  .wap {{currentTitle}}
    ul(@click="event")
        li(v-for="(x,index) in currentList" :key="index" :class="{active:x.isActive ? true :false}" :data-index="index") 
            | {{x.title}} : {{x.ans}}
    button(@click="next") 下一题
    p {{answer}}
    p {{currentScore}}
</template>
<script>
export default {
  name:'item',
  props:[],
  data(){
      return {
          answer:this.$store.state.answer,
          isActive:false,
          currentId:this.$store.state.currentId,
          currentChoose:null,
          defen:0,
          currentTitle:'',
          list: [
              {
                title:'第一题 ',
                qusId:1,
                listItem:[
                    {title:'a',ans:'正确11',is_right:false,isActive:false},
                    {title:'b',ans:'正确2',is_right:false,isActive:false},
                    {title:'c',ans:'正确3',is_right:false,isActive:false},
                    {title:'d',ans:'正确4',is_right:true,isActive:false},
                ]
              },
              {
                title:'第二题 ',
                qusId:2,
                listItem:[
                    {title:'a',ans:'正确12',is_right:false,isActive:false},
                    {title:'b',ans:'正确2',is_right:false,isActive:false},
                    {title:'c',ans:'正确3',is_right:false,isActive:false},
                    {title:'d',ans:'正确4',is_right:true,isActive:false},
                ]
              },
              {
                title:'第三题 ',
                qusId:3,
                listItem:[
                    {title:'a',ans:'正确13',is_right:false,isActive:false},
                    {title:'b',ans:'正确2',is_right:false,isActive:false},
                    {title:'c',ans:'正确3',is_right:false,isActive:false},
                    {title:'d',ans:'正确4',is_right:true,isActive:false},
                ]
              },
              {
                title:'第四题 ',
                qusId:4,
                listItem:[
                    {title:'a',ans:'正确14',is_right:false,isActive:false},
                    {title:'b',ans:'正确2',is_right:false,isActive:false},
                    {title:'c',ans:'正确3',is_right:false,isActive:false},
                    {title:'d',ans:'正确4',is_right:true,isActive:false},
                ]
              }
          ]
      }
  },
  methods: {
      event(e){
          if(e.target.nodeName.toLowerCase() === 'li'){
              let id = parseInt(e.target.dataset.index)
              this.currentChoose =id;
              this.currentList.forEach((item,index) => {
                  if(index == this.currentChoose){
                      item.isActive =true;
                  }else{
                      item.isActive =false;
                  }
              });

          }
      },
      next(){
          if(!this.currentChoose && this.currentChoose !=0) {
              alert('ddddd')
            return false
          }
          
          if(this.currentId==this.list.length-1){
              this.$store.state.currentId = this.currentId
              if(this.$store.state.answer.length >= this.list.length){
                  this.$router.push('/scroe')
              }else{
                  this.answerRight(this.currentChoose); 
                  this.$store.state.answer.push(this.currentChoose)
              }
              this.$router.push('/scroe')
              return false
          }else{
              this.answerRight(this.currentChoose); 
            this.$store.state.currentId = this.currentId
            this.$store.state.answer.push(this.currentChoose)
            this.currentId ++;
            this.currentTitle = this.list[this.currentId].title
          }
          this.currentChoose =null
         
      },
      answerRight(chooseid){
          let rightid;
          this.currentList.forEach((item,index)=>{
              if(item.is_right){
                  rightid =index;
              }
          })
          if(chooseid ===rightid){
              this.$store.state.score +=20;
          }
      }
  },
  computed:{
    currentList(){
          return this.list[this.currentId].listItem
      },
    currentScore(){
        return this.$store.state.score;
    }
  },
  created(){
      this.currentTitle = this.list[this.currentId].title
  }
  
}
</script>
<style lang="scss">

    ul {
        list-style: none;
        li {
            padding: 20px ;
            &.active {
                background: red;
            }
        }
    }
</style>


