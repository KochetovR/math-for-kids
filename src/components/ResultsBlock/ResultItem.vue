<template>
  <div class="d-flex align-center">
    <!-- <v-icon :color="iconColor">{{ icon }}</v-icon>
    <span class="ml-1 text-h6">{{ count }}</span> -->
    <v-btn class="text-none" icon elevation="0">
      <v-badge :content="count" color="primary" floating>
        <v-icon size="30" :color="iconColor">{{ icon }}</v-icon>
      </v-badge>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ResultItem",
  props: {
    count: {
      type: Number,
      riquired: true,
    },
    icon: {
      type: String,
      default: "mdi-emoticon",
    },
    iconColor: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style lang="scss" scoped></style>
