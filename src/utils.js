export const getData = (components, store) => {
  const arr = [];
  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    if (component.asyncData) {
      arr.push(component.asyncData(store));
    }
    const sonComp = component.components || {};
    if (Object.keys(sonComp).length !== 0) {
      const sonArr = Object.keys(sonComp).map((son) => sonComp[son]);
      arr.push(...getData(sonArr, store));
    }
  }
  return arr;
};
