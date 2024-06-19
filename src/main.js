import "./assets/main.css";

// Toast
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { AUTH } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import router from "./router";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

let app;

onAuthStateChanged(AUTH, () => {
  if (!app) {
    app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(vuetify);
    app.use(ToastPlugin);

    app.mount("#app");
  }
});
