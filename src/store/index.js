import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    answer:[],
    score:0,
    currentId:0
}
export default new Vuex.Store({
    state
})