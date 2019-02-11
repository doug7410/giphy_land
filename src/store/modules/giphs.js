import axios from "axios/index";
import { make } from 'vuex-pathify'

const state = {
  giphs: []
}

export default {
  state,
  actions: {
    fetchGiphs({ commit }, searchTerm) {
      axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'AklVze3sjwNAaPKgsUYvj7Gp3Bdz9xzY',
          q: searchTerm,
          limit: 10,
          offset: 0,
          rating: 'G',
          lang: 'en'
        }
      })
        .then((response) => {
          commit('giphs', response.data.data);
          commit('currentSearch', searchTerm)
        });
    }
  },
  mutations: make.mutations(state)
}