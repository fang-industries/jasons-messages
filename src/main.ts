import "@/assets/styles/tailwind.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
