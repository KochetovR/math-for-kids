<template>
  <div class="d-flex align-center">
    <v-btn class="text-none" icon elevation="0" @click="openResultDialog">
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
    tab: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    openResultDialog() {
      this.toggle_results_dialog_tab(this.tab);
      this.toggle_results_dialog(true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
