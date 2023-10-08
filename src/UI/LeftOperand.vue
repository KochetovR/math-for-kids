<template>
  <div class="text-h2 font-weight-bold">{{ number }}</div>
</template>

<script>
export default {
  name: "LeftOperand",
  props: {
    number: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
