import db from '../Database'

export default {
  state: {
    favorites: []
  },

  getters: {
    favorites: state => state.favorites
  },

  actions: {
    addFavorite({ commit, getters, dispatch }) {
      commit('ADD_FAVORITE', getters.currentSearch)
      dispatch('updateStorage')
    },
    removeFavorite({commit, getters }) {
      commit('REMOVE_FAVORITE', getters.currentSearch)
    },
    updateStorage({getters}) {
      db.ref('/favorites').set(getters.favorites)
    },
    fetchFavorites({commit}) {
      db.ref('/favorites')
        .once('value')
        .then(snapshot => {
          commit('FILL_FROM_STORAGE', snapshot.val())
        })
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
    },

    FILL_FROM_STORAGE(state, favorites) {
      state.favorites = favorites
    }
  }
}