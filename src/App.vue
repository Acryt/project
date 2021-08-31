<template>
  <div id="app">
    <logoButton></logoButton>
    <leftMenu></leftMenu>
    <libComp></libComp>
    <div id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from "./components/LeftMenu.vue";
import logoButton from "./components/LogoButton.vue";
import libComp from "./components/LibComponents.vue";

export default {
  components: { leftMenu, logoButton, libComp },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Roboto"), url("./fonts/Roboto-Regular.ttf") format("woff2"),
    url("/fonts/Roboto-Regular.ttf") format("ttf");
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 600;
}
#app {
  display: grid;
  grid-template:
    " logo body "
    " menu body "
    " lib body ";
  background-color: #17191c;
  color: #5a5b5d;
}
#body {
  grid-area: body;
  width: calc(100vw - 300px);
}
</style>
