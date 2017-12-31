interface User {
  name: number
  age: number,
  word: string
}

const state = {
  text: 'hello world'
}

const mutations = {
  updateName(state, name) {
    state.name = name
  }
}

const actions = {
}

const getters = {
  text: state => state.text
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
