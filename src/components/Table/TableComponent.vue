<template>
  <div>
    <b-table
      :items="items"
      sticky-header
      :fields="fields"
      responsive="sm"
    >

    </b-table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>