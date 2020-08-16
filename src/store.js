import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default () => {
  const store = new Vuex.Store({
    state: {
      name: "张三",
      age: "19",
    },
    mutations: {
      changeName(state, name) {
        state.name = name;
      },
      changeAge(state, age) {
        state.age = age;
      },
    },
    actions: {
      changeName({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("changeName", "李四");
            resolve();
          }, 1000);
        });
      },
      changeAge({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("changeAge", "100");
            resolve();
          }, 1000);
        });
      },
    },
  });
  // 如果浏览器执行的时候，需要将服务器设置的最新状态替换掉客户端的
  if (typeof window !== "undefined" && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }
  return store;
};
