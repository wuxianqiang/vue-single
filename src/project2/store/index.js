import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     name: 'project2'
//   },
//   mutations: {
//     todo (state) {
//       console.log(state.name)
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export default {
  state: {
    name: 'project2'
  },
  mutations: {
    todo (state) {
      console.log(state, 'project2')
    }
  },
  actions: {
  },
  modules: {
  }
}
