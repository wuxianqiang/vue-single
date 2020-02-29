import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     name: 'project1'
//   },
//   mutations: {
//     todo (state) {
//       console.log(state, 'todo')
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export default {
  state: {
    name: 'project1'
  },
  mutations: {
    todo (state) {
      console.log(state, 'todo')
    }
  },
  actions: {
  },
  modules: {
  }
}
