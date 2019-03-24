import Vue from "vue";
import App from "./app.vue";
import SonetVue from "../../sonet-vue";


Vue.use(SonetVue);

new Vue({
  el:     "#root",
  render: e => e(App)
});

