import { make } from 'vuex-pathify'

const state = {
  currentSearch: ''
}

export default {
  state,
  getters: {
    ...make.getters(state),
    currentSearchIsInFavorites: (state, getters, parentState) => {
      return parentState.favorites.favorites.includes(state.currentSearch)
    }
  },
  mutations: make.mutations(state)
}