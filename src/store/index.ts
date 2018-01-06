import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

Vue.use(Vuex)

// export vuex store instance
export default new Vuex.Store({
  strict: true,
  modules: {
    user
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
