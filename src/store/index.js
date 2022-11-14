import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    house: null,
  },
  getters: {
  },
  mutations: {
    SET_SIMPLE_HOUSE(state, house){
      state.house = house;
    }
  },
  actions: {
    simpleHouse({commit}, house){
      commit("SET_SIMPLE_HOUSE", house);
    }
  },
  modules: {
  }
})
