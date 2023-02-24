<template>
  <div class="bank">
    <div class="bank__items-top">
      <div class="bank__items-top-logo">
      <span class="material-symbols-outlined">add_a_photo</span>
        <span v-if="collapsed">БРОНЕВ</span>
      </div>
    </div>
    <div class="bank__items-middle">
      <span class="material-symbols-outlined">add_a_photo</span>
    </div>
    <div class="bank__items-bottom">
      <a href="/" class="bank__items-sources">
        <span class="material-symbols-outlined">add_a_photo</span>
      </a>
      <a href="/" class="bank__items-sources">
      <span class="material-symbols-outlined">add_a_photo</span>
      </a>
      <a href="/" class="bank__items-sources">
        <span class="material-symbols-outlined">add_a_photo</span>
      </a>
      <a href="/" class="bank__items-sources">
        <span class="material-symbols-outlined">add_a_photo</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {

    };
  },
  props: {
    collapsed: {
      type: Boolean,
      required: false
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.bank {
  /*border-right: 1px solid hsla(0, 0%, 110%, 0.5);*/
  box-shadow: 5px 0px 10px 1px rgba(34, 60, 80, 0.14);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: var(--maxsidew);
  background-color: var(--sidecolorsecond);
  height: 100vh;
  transition: 0.15s linear;
  float: left;
  z-index: 999;
  position: relative
}

.bank__items-top {
  background-color: var(--sidecolorfirst);
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  padding: 9.5px;
  /*height: 53px;*/
  /*width: 65px;*/
  /*position: relative;*/
  /*top: -10px;*/
  /*left: -10px;*/
}

.bank__items-top-logo {
  /*padding: 10px;*/
}

.bank__items-bottom {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.bank__items-sources {
  padding-top: 10px;
  text-decoration: none;
}

.bank__items-bottom-border {
  display: flex;
  flex-direction: column;
  /*justify-content: flex-end;*/
  /*align-items: flex-end;*/
  border-right: 1px solid #ffff;
  box-shadow: 1px 0px 1px 0px rgba(34, 60, 80, 0.14);
  height: 56px;
  position: relative;
  left: 0px;
}

.bank__items-top-logo .material-symbols-outlined {
  color: var(--sidecolorsecond);
}

.bank__items-bottom .material-symbols-outlined {
  color: grey;
}

.bank__items-middle {
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72.5px;
  flex-direction: column;
  position: relative;
}

</style>