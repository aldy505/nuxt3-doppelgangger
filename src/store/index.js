import { createStore } from "vuex";

const index = createStore({
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state, number) {
      if (!number) {
        state.count++;
        return;
      }

      state.count += number;
    }
  },
  actions: {
    count({commit}, {number}) {
      commit('increment', number);
    }
  }
})

export default index