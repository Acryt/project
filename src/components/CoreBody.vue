<template>
  <div id="coreBody">
    <div id="title">{{ this.title }}</div>
    <div id="name">{{ this.name }}</div>
    <div class="fb">
      <div id="compName">{{ this.componentName }}</div>
      <searchBar v-if="this.searchBar"></searchBar>
    </div>
    <tableJson class="tt" v-if="isTable" :tableWhere="tableWhere"></tableJson>
    <but v-if="isButton" :buttonName="buttonName"></but>
    <!-- <div v-if="pub">Публикации</div> -->
  </div>
</template>

<script>
import but from "./Button.vue";
import tableJson from "./Table.vue";
import searchBar from "./SearchBar.vue";

export default {
  components: { but, tableJson, searchBar },
  data() {
    return {
      routeId: this.$route.params["id"],
    };
  },
  watch: {
    $route(toRoute) {
      this.routeId = toRoute.params["id"];
      this.conf = JSON.parse(localStorage.getItem(toRoute.params["id"]));
      this.title = this.conf.title;
      this.name = this.conf.name;
      this.componentName = this.conf.componentContent.componentName;
      this.searchBar = this.conf.componentContent.searchBar;
      this.isTable = this.conf.componentContent.table;
      this.tableWhere = this.conf.componentContent.tableWhere;
      this.isButton = this.conf.componentContent.button;
      this.buttonName = this.conf.componentContent.buttonName;
    },
  },
};
</script>

<style>
#coreBody {
  color: #9b9ca0;
  display: flex;
  flex-direction: column;
  padding: 36px 40px 0px 40px;
}
#title {
  font-weight: 500;
}
#name {
  margin: 10px 0px 36px;
  font-size: 22px;
  color: #bbbcc1;
}
.fb {
  display: flex;
  justify-content: space-between;
}
#compName {
  margin-top: 6px;
  margin-bottom: 10px;
}
.tt {
  padding-bottom: 20px;
}
</style>
