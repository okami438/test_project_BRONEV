<template>
<div class="foobar">
  <div class="foobar__items">
      <span>{{ foobar_text }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      foobar_text: '© 2019 "Транстур" ООО'
    }
  }
}
</script>

<style scoped>
.foobar {
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.14);;
  background-color: var(--sidecolorsecond);
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.foobar__items {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}
</style>