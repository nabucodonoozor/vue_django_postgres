// import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    
    array_itens: [],
    user_id: null
    
  },
  mutations: {
    insere_item(state, obj) {
      
      state.array_itens.push(obj)
    },
    insere_user_id(state, obj) {
      
      state.user_id = obj
      
    }
  },
  actions: {
  },
  modules: {    
  }
})
