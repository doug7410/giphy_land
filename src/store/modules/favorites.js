export default {
  state: {
    favorites: []
  },

  getters: {
    favorites: state => state.favorites
  },


  actions: {
    addFavorite({commit}, favorite) {
      commit('ADD_FAVORITE', favorite)
    },
    removeFavorite({commit, getters }, favorite) {
      const index = getters.favorites.indexOf(favorite)
      commit('REMOVE_FAVORITE', index)

    }
  },

  mutations: {
    ADD_FAVORITE(state, favorite) {
      state.favorites.push(favorite)
    },

    REMOVE_FAVORITE(state, index) {
      state.favorites.splice(index, 1)
    }
  }

}