import createApp from "./main";

import { getData } from "./utils";

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    router.push(context.url);

    // 涉及到异步组件
    router.onReady(() => {
      // 获取路径匹配到的组件
      const matches = router.getMatchedComponents();
      if (matches.length === 0) {
        reject({ code: 404 });
        return;
      }
      const dataList = getData(matches, store);
      // 获取异步数据
      Promise.all(
        // matches.map((component) => {
        //   if (component.asyncData) {
        //     return component.asyncData(store);
        //   }
        // })
        dataList
      ).then(() => {
        // 将vuex状态挂载到上下文中,会将状态挂载到window上
        context.state = store.state;
        resolve(app);
      });
    }, reject);
  });
};
