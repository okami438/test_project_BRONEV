<template>
  <div class="home">
    <div class="bars">
      <div class="sidebar">
        <Sidebar
          :class="!collapsed ? 'collapsed' : ''"
          :collapsed="collapsed"
        />
      </div>
      <div class="navbar">
        <Navbar
          @collapsed="collapsed = !collapsed"
        />
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import TheDashboardComponent from "@/views/dashboard/TheDashboardComponent.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "TheMainComponent",
  components: {
    Navbar,
    Sidebar,
    Footer,
    TheDashboardComponent
  },
  data() {
    return {
      collapsed: false,
      // bank_text: false
    }
  }
};
</script>

<style scoped>

* {
  /*display: flex;*/
}

.home {
  height: 100vh;
  width: 100vw;
  display: block;
}

.collapsed {
  transition: 0.15s linear;
  width: var(--minsidew);

}

.sidebar {
  display: block;
  height: 100%;
}

.bars {
  display: block;
  /*height: 100vh;*/
}

/*.footer {*/
/*  display: flex;*/
/*  float: bottom;*/
/*}*/

.navbar {
  display: flex;
  height: 50px;
  padding: 0;
  margin: 0;
}

.footer {
  display: flex;
  flex: 0 0 auto;
  height: 50px;
}

.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
}
</style>
