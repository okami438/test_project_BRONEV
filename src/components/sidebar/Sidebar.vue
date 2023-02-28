<template>
  <div class="bank">
    <div class="bank__items-top">
      <div class="bank__items-top-logo">
        <div v-if="collapsed" class="bank__items-top-logo-collapsed">
          <div class="bank__items-top-icon" :style="styleLogoIcon"></div>
          <span class="bank__items-top-text">БРОНЕВ</span>
        </div>
        <div v-else class="bank__items-top-logo-collapse">
          <div class="bank__items-top-icon" :style="styleLogoIcon"></div>
<!--          <span class="material-symbols-outlined">add_a_photo</span>-->
        </div>
      </div>
    </div>
    <div  class="bank__items-middle">
      <div class="bank__items-middle-collapsed" :class="{collapsed: collapsed}">
          <div class="bank__items-top-icon" :style="styleMenuIcon"></div>
      </div>
<!--      <span class="material-symbols-outlined">add_a_photo</span>-->
    </div>
    <div class="bank__items-bottom">
      <div v-if="collapsed" class="bank__items-bottom-collapsed">
        <div v-for="item in 1"  href="/" class="bank__items-sources d-flex align-items-center justify-content-start">
          <span class="material-symbols-outlined">menu_book</span>
          <p class="bank__items-bottom-collapsed-text my-0"> Справочник </p>
          <dropdown/>
        </div>
      </div>
      <div v-else class="bank__items-bottom-collapse">
        <div v-for="item in 1" href="/" class="bank__items-sources d-flex align-items-center justify-content-start">
          <span class="material-symbols-outlined">menu_book</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/sidebar/Dropdown.vue";
import logoMenu from "@/assets/logomenu.png"
import menuBar  from  "@/assets/menu.png"

export default {
  name: "Sidebar",
  components: { Dropdown },
  data() {
    return {
      menuBar,
      logoMenu,
      list: false,
      styleMenuIcon: {
        backgroundImage: `url(${menuBar})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      styleLogoIcon: {
        backgroundImage: `url(${logoMenu})`,
        width: "32px",
        height: "32px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      required: false
    },
  },
};
</script>

<style scoped>
.bank {
  /*border-right: 1px solid hsla(0, 0%, 110%, 0.5);*/
  box-shadow: 5px 0px 10px 1px rgba(34, 60, 80, 0.14);
  padding: 0;
  margin: 0;
  /*box-sizing: border-box;*/
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
  padding: 10px;
  height: 50px;
  /*transition: 0.25s linear;*/
}

/*.bank__items-top-icon {*/
/*  max-width: 100%;*/
/*  max-height: 100%;*/
/*  width: 32px;*/
/*  height: 32px;*/
/*  position: absolute;*/
/*  top: 1px;*/
/*}*/

.bank__items-top-logo .material-symbols-outlined {
  color: var(--sidecolorsecond);
}

.bank__items-top-logo-collapsed {
  display: flex;
  justify-content: center;
}

.bank__items-top-text {
  position: relative;
  color: var(--sidecolorsecond);
  align-items: center;
  transition: 0.15s ease-out;
  font-size: 24px;
}

.collapsed .bank__items-top {
  display: flex;
  justify-content: center;
  transition: 0.15s ease-out;
}

/*.collapsed .bank__items-middle {*/
/*  height: 200px;*/
/*}*/

.bank__items-middle-collapsed {
  position: relative;
  height: 60px;
  width: var(--minsidew);
  transition: width .15s ease-out, height .15s ease-out;
}

.bank__items-middle-collapsed.collapsed {
  height: 160px;
  width: var(--maxsidew);
  transition: width .15s ease-out, height .15s ease-out;
}

.bank__items-middle-collapse {
  transition: ease-out;
  height: 55px;
}

.bank__items-middle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.bank__items-bottom {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.collapsed .bank__items-bottom {
  align-items: center;
  transition: .25s linear;
}


.bank__items-sources {
  height: 50px;
  padding-top: 20px;
  text-decoration: none;
}


.bank__items-bottom .material-symbols-outlined {
  color: grey;
  cursor: pointer;
}

.bank__items-bottom-collapsed {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
}


.bank__items-bottom-collapsed-text {
  display: flex;
  color: grey;
  margin-left: 10px;
}


</style>