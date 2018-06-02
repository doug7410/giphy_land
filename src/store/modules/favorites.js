export default {
  state: {
    favorites: []
  },

  getters: {
    favorites: state => state.favorites
  },

  actions: {
    addFavorite({ commit, getters }) {
      commit('ADD_FAVORITE', getters.currentSearch)
    },
    removeFavorite({commit, getters }) {
      commit('REMOVE_FAVORITE', getters.currentSearch)
    }
  },

  mutations: {
    ADD_FAVORITE(state, favorite)
    {
      state.favorites.push(favorite)
    },

    REMOVE_FAVORITE(state, favorite)
    {
      const index = state.favorites.indexOf(favorite)
      state.favorites.splice(index, 1)
    }
  }
}