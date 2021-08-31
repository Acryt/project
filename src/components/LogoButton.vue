<template>
  <div class="active">
    <div id="logo">
      <img id="kmttimg" src="../assets/KMTT.png" />
      <div class="cont">
        <p>KMTT admin</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5A5B5D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div class="popup1">
      <div class="element top" @click="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9B9CA0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path>
        </svg>
        <p>Основные настройки</p>
      </div>
      <div class="element" @click="configuratingMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9B9CA0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <p>Настроить меню</p>
      </div>
      <div class="element bottom" @click="postError">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9B9CA0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-alert-triangle"
        >
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          ></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <p>Сообщить о проблеме</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    options() {
      alert("Основные настройки");
    },
    configuratingMenu() {
      alert("Настройка мено");
    },
    postError() {
      alert("Сообщение отправлено");
    },
  },
};
</script>

<style scoped>
#logo {
  display: flex;
  grid-area: logo;
  width: 300px;
  height: 56px;
  border: 1px solid #1d1f22;
  color: #ffffff;
  padding: 0px 20px;
  align-items: center;
}
#kmttimg {
  height: 50%;
}
.cont {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: inherit;
  margin-left: 10px;
}
.popup1 {
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: #17191c;
  border: 1px solid #27292c;
  border-radius: 5px;
  margin: -5px 15px 0px 15px;
  box-shadow: 0px 0px 10px 2px #000000a8;
}
.element {
  display: flex;
  height: 38px;
  width: 270px;
  padding: 0.7vmax;
}
.element p {
  text-decoration: none;
  color: #9b9ca0;
  font-size: 13px;
  font-weight: 400;
  padding-left: 12px;
}
.top {
  border-radius: 5px 5px 0px 0px;
}
.bottom {
  border-radius: 0px 0px 5px 5px;
}
.active {
  cursor: pointer;
}
.active:hover .popup1 {
  display: flex;
}
.active:hover .popup1 .element:hover {
  background-color: #222428;
}
</style>
