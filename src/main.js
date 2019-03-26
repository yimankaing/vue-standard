import Vue from "vue";
// Components
import "./components";
// Plugins
import "./plugins";
// Sync router with store
import { sync } from "vuex-router-sync";

// Application imports
import App from "./App";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";

// Custom styles
import "./styles/fonts.css";
import "./styles/main.css";

// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
