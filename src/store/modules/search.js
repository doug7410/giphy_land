export default {
  state: {
    currentSearch: ''
  },

  getters: {
    currentSearch: state => state.currentSearch,
    currentSearchIsInFavorites: (state, getters) => {
      return getters.favorites.includes(state.currentSearch)
    }
  },

  actions: {

  },

  mutations: {
    CURRENT_SEARCH(state, searchTerm) {
      state.currentSearch = searchTerm
    }
  }
}