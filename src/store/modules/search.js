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
    CURRENT_SEARCH(state, search) {
      state.currentSearch = search
    }
  }

}