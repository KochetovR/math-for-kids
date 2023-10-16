<template>
  <h2
    class="text-h6"
    :class="{
      'text-h3': $vuetify.display.lg,
      'text-h2': $vuetify.display.xl,
      'text-h1': $vuetify.display.xxl,
    }"
  >
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "PopupTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
