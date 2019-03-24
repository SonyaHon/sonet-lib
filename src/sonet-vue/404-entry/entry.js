import Vue from "vue";
import App from "./app.vue";
import SonetVue from "../index";


Vue.use(SonetVue);

new Vue({
  el:     "#root",
  render: e => e(App)
});

