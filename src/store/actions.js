// https://vuex.vuejs.org/en/actions.html

export default {
  updateUser({ commit , state}, payload) {
    commit("setUser", payload);
  }
}
