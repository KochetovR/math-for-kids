<template>
  <v-list lines="two" class="px-1" height="270">
    <v-list-item
      v-for="({ example, type }, index) in items"
      :key="`${type}${index}${items.length}`"
    >
      <v-list-item-title class="text-h6 text-center mb-1">
        {{ example }}
      </v-list-item-title>
      <v-divider class="mb-0"></v-divider>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "ResultsDialogList",
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list::-webkit-scrollbar {
  display: none;
}
</style>
