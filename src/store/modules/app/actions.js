// https://vuex.vuejs.org/en/actions.html
import i18n from "../../../i18n";
export default {
  changeLocale({ commit, state }, payload) {
    i18n.locale = payload;
    commit("setLocale", payload);
  },
  showNotification({ commit, state }, payload) {
    commit("setNotification", { ...state.notification, ...payload });
  },
  showLoading({commit, state}, payload){
    commit("setLoading", {...state.loading, ...payload});
  }
};
