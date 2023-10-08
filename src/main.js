import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import numberRandomizerMixin from "./mixins/numberRandomizerMixin";
import mutationsMixin from "./mixins/mutationsMixin";
import gettersMixin from "./mixins/gettersMixin";

loadFonts();
const app = createApp(App);
app.mixin(gettersMixin);
app.mixin(mutationsMixin);
app.mixin(numberRandomizerMixin);

app.use(router).use(store).use(vuetify).mount("#app");
