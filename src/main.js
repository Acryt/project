import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import config from "./config.json";
import usersList from "./usersList.json";

localStorage.setItem("config", JSON.stringify(config));
config.forEach((el) => {
  el.content.forEach((elin) => {
    elin.title = el.title;
    localStorage.setItem(elin.id, JSON.stringify(elin));
  });
});

localStorage.setItem("usersList", JSON.stringify(usersList));

createApp(App).use(router).mount("#app");
