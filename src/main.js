// main.js

import * as components from "./components";

const LoneMarkLib = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  },
};

export default LoneMarkLib;

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(LoneMarkLib);
}
