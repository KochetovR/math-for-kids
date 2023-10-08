<template>
  <v-list lines="two">
    <v-list-item v-for="(item, index) in items" :key="`${item}${index}`">
      <v-list-item-title class="text-h6 text-center">
        {{ item }}
      </v-list-item-title>
      <v-divider></v-divider>
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

<style lang="scss" scoped></style>
