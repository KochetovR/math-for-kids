<template>
  <h1
    class="text-h4"
    :class="{
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
