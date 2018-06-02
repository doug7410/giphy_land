import axios from "axios/index";

export default {
  state: {
    giphs: []
  },

  getters: {
    giphs: state => state.giphs
  },

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
          commit('GIPHS', response.data.data);
          commit('CURRENT_SEARCH', searchTerm)
        });
    }
  },

  mutations: {
    GIPHS(state, giphs) {
      state.giphs = giphs;
    },
  }
}