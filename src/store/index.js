import Vue from 'vue'
import Vuex from 'vuex'

import halaman from './halaman'
import berita from './berita'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    halaman,
    berita
  }
})

export default store
