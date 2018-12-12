import Vuex from 'vuex'
import Vue from 'vue'
require('whatwg-fetch')

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      editPost: {
        title: '测试标题改动',
        tags: '测试tag改动/tag',
        introduce: '测试说明改动',
        content: '#测试内容'
      }
    },
    mutations: {
      SET_USER: function(state, user) {
        state.authUser = user
      }
    },
    actions: {}
  })

export default store
