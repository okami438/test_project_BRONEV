<template>
<div class="menu">
  <div @click="showMenu" class="button-release"> <span class="material-symbols-outlined"  :class="{'bank__items-bottom-collapsed-arrow': isOpen }">expand_more</span></div>
  <transition name="fade">
  <div v-if="isOpen" class="menu-item">
    <a v-for="name in drop_down" href="#">{{ name }}</a>
  </div>
  </transition>
</div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      isOpen: false,
      drop_down:
        { nameFirst: 'Водители ',
         nameSecond: 'Направления' },
    }
  },
  methods: {
    showMenu: function() {
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style scoped>

.button-release {
  display: flex;
  color: grey;
  position: relative;
  top: 1px;
  left: 35px;
  cursor: pointer;
}

.menu .menu-item {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 265px;
  left: 19px;
  margin-left: 36px;
  line-height: 2.5rem;
}

.menu a {
  text-decoration: none;
  color: grey;
}

.material-symbols-outlined {
  transition: transform .15s;
}

.material-symbols-outlined.bank__items-bottom-collapsed-arrow {
  transform: rotate(180deg);
  transition: transform .15s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>