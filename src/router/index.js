import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import home from '@/components/home/home'
import item from '@/components/item/item'
import scroe from '@/components/scroe/scroe'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/item',
      name:'item',
      component:item
    },{
      path:'/scroe',
      name:'scroe',
      component:scroe
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.name == 'home'){
    store.state.score = 0;
    store.state.answer =[];
    store.state.currentId = 0
  }
  next()
})
export default router;