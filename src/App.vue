<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style>
:root {
  --sidecolorfirst: #2b2f2f;
  --bodycolorfirst: #e1edfa;
  --sidecolorsecond: #ffff;
  --maxsidew: 220px;
  --minsidew: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
  background-color: var(--bodycolorfirst);

}

body {
  height: 100vh;
  overflow: hidden;
  background-color: var(--bodycolorfirst)
}
</style>
