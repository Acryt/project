<template>
  <div id="menu">
    <div v-for="blockMenu in menuList" :key="blockMenu.title">
      <div>
        <p class="title">{{ blockMenu.title.toUpperCase() }}</p>
        <div v-for="titleCont in blockMenu.content" :key="titleCont">
          <router-link class="link" :to="titleCont.id">{{
            titleCont.name
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: JSON.parse(localStorage.getItem("config")),
    };
  },
};
</script>

<style>
#menu {
  grid-area: menu;
  width: 300px;
  height: calc(100vh - 56px - 56px);
  border-left: 1px solid #1d1f22;
  border-right: 1px solid #1d1f22;
  letter-spacing: 1px;
}
.title {
  font-size: 13px;
  padding: 20px 20px 6px 20px;
}
.link {
  display: block;
  padding: 6px 20px;
  text-decoration: none;
  color: #9b9ca0;
  font-weight: 400;
}
.link:hover {
  background-color: #33363d;
}
.router-link-exact-active {
  background-color: #23252a;
}
</style>
