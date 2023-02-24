<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --sidecolorfirst: #2b2f2f;
  --bodycolorfirst: #e1edfa;
  --sidecolorsecond: #ffff;
  --maxsidew: 240px;
  --minsidew: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  height: 100vh;
  overflow: hidden;
}
</style>
