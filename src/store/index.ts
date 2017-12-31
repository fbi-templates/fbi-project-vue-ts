import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  test: 123123123
}

const getters = {
  test: state => state.test
}

// store 默认已开启命名空间，详见：./modules/*
export default new Vuex.Store({
  strict: true,
  modules: {
    user
  },
  state,
  getters,
  plugins: [createPersistedState({storage: window.sessionStorage})]
})
