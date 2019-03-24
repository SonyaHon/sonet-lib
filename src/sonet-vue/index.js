import SvBtn from "./components/sv-btn.vue";
import Page404 from "./components/404-page.vue";
import SvApp from "./components/sv-app.vue";
import SvAppToolbar from "./components/sv-app-toolbar.vue";
import SvAppContent from "./components/sv-app-content.vue";
import SvSpacer from "./components/sv-spacer.vue";
import SvCard from "./components/sv-card.vue";
import SvCardContent from "./components/sv-card-content.vue";
import SvCardTitle from "./components/sv-card-title.vue";


export default {
  install(Vue) {
    Vue.component("sv-btn", SvBtn);
    Vue.component("page-404", Page404);
    Vue.component("sv-app", SvApp);
    Vue.component("sv-app-toolbar", SvAppToolbar);
    Vue.component("sv-app-content", SvAppContent);
    Vue.component("sv-spacer", SvSpacer);
    Vue.component("sv-card", SvCard);
    Vue.component("sv-card-content", SvCardContent);
    Vue.component("sv-card-title", SvCardTitle);
  }
};
