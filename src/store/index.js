import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'
import giphs from './modules/giphs'
import search from './modules/search'
import favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ pathify.plugin ], // activate plugin
  modules: {
    giphs,
    search,
    favorites
  }
})