import Vue from "vue";

import createRouter from "./router.js";

import App from "./App.vue";
import createStore from "./store";
import "./base.css";

export default () => {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });

  return { app, router, store };
};
