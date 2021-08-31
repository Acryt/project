<template>
  <button id="butCore" @click="addUser">{{ buttonName }}</button>
</template>

<script>
export default {
  props: {
    buttonName: String,
  },
  methods: {
    addUser() {
      alert("Добавлено");
    }
  }
};
</script>

<style>
#butCore {
  width: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px none #3680ec;
  background-color: #3680ec;
  color: #ffffff;
  font-weight: 500;
}
#butCore:hover {
  background-color: #4e95ff;
}
#butCore:active {
  background-color: #1b6fec;
}
</style>
