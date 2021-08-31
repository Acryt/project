<template>
  <div>
    <label>
      <svg class="icon">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input id="search" type="text" placeholder="Поиск" />
    </label>
    <svg class="spritesheet">
      <symbol
        id="icon-search"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <title>search</title>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </symbol>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
label {
  position: relative;
}
label > .icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-60%);
  color: silver;
}

label > input {
  padding-left: 30px;
  height: 26px;
  width: 204px;
  background-color: #17191c;
  border: 1px solid #2f3035;
  border-radius: 50vh;
  color: #9b9ca0;
  font-weight: 500;
  font-size: 14px;
}
label > input:focus {
  outline: none;
  border-color: #2f3035;
  box-shadow: 0 0 10px #2f3035;
}

/*
  SVG SpriteSheet
*/
.spritesheet {
  display: none;
}
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
