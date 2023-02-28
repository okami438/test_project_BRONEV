<template>
<div class="navbar">
  <div class="navbar__items">
    <div class="navbar__items-left">
      <button class="navbar__items-left-menu" @click="collapsedSideBar"><span class="material-symbols-outlined">
menu
</span></button>
      <div class="navbar__items-left-bank">
        <router-link class="navbar__items-left-sources" to="/sales">Продажи</router-link>
        <router-link class="navbar__items-left-sources" to="/roads">Маршруты</router-link>
      </div>
    </div>
    <div class="navbar__items-right">
      <a href="/" class="navbar__items-right-sources"><span class="material-symbols-outlined">
add_a_photo
</span></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      collapsed: false,
      // bank_text: false
    }
  },
  methods: {
    collapsedSideBar: function () {
      this.collapsed = !this.collapsed
      this.$emit("collapsed", this.collapsed)
    }
  }
}
</script>

<style scoped>

.navbar {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: calc(100vw - var(--minsidew));
  height: 50px;
  background-color: var(--sidecolorfirst);
  float: top;
}

.navbar__items {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}


.navbar__items-right {
  display: flex;
  justify-content: flex-end;
}
.navbar__items-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.navbar__items-left-menu {
  background-color: var(--sidecolorfirst);
  color: var(--sidecolorsecond);
  border: none;
  position: relative;
  top: 2px;
  /*margin-right: 10px;*/
}

.navbar__items-left-sources {
  text-decoration: none;
  margin-left: 15px;
  color: var(--sidecolorsecond)
}

.navbar__items-right-sources {
  text-decoration: none;
  margin-right: 15px;
  color: var(--sidecolorsecond);
}

/*.collapsedSideBar {*/
/*  width: calc(100% - var(--maxsidew));*/
/*}*/
</style>