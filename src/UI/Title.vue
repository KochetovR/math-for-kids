<template>
  <h1
    class="text-h1"
    :class="{
      'text-h6': $vuetify.display.xs,
      'text-h5': $vuetify.display.sm,
      'text-h4': $vuetify.display.md,
      'text-h3': $vuetify.display.lg,
      'text-h2': $vuetify.display.xl,
      'text-h1': $vuetify.display.xxl,
    }"
  >
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "ComponentTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
