export default {
  state: {
    currentSearch: ''
  },

  getters: {
    currentSearch: state => state.currentSearch
  },

  actions: {

  },

  mutations: {
    CURRENT_SEARCH(state, searchTerm) {
      state.currentSearch = searchTerm
    }
  }
}