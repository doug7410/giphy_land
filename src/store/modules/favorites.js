import db from '../Database'
import { make } from 'vuex-pathify'

const state = {
    favorites: []
}

export default {
  state,
  actions: {
    ...make.actions('favorites'),
    updateStorage({state}) {
      db.ref('/favorites').set(state.favorites)
    },
    fetchFavorites({commit}) {
      db.ref('/favorites')
        .once('value')
        .then(snapshot => {
          commit('favorites', snapshot.val())
        })
    }
  },
  mutations: make.mutations(state)
}