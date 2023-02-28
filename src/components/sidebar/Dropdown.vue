<template>
<ul v-if="show" class="menu px-0 pl-2 pt-2">
  <li class="menu-item" v-for="item in items" :key="item.key">
    <router-link :to="{ name: item.route}">{{ item.name }}</router-link>
  </li>
</ul>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    items: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
};
</script>

<style scoped>

.menu .menu-item {
  display: flex;
  flex-direction: column;
  margin-left: 36px;
  line-height: 2.5rem;
}

.menu a {
  text-decoration: none;
  color: grey;
}

</style>