<template>
  <div class="popup2">
      <div class="element top" @click="options">
        <p>Основные настройки</p>
      </div>
      <div class="element" @click="configuratingMenu">
        <p>Настроить меню</p>
      </div>
      <div class="element bottom" @click="postError">
        <p>Сообщить о проблеме</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        isView: Boolean,
    }
}
</script>

<style>
.popup2 {
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
.element:hover {
  background-color: #222428;
}
</style>