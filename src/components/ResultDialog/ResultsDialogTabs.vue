<template>
  <v-layout class="overflow-visible my-6" style="height: 56px">
    <v-bottom-navigation v-model="value" color="teal" grow>
      <v-btn>
        <v-icon color="success">mdi-emoticon</v-icon>
        Правильные
      </v-btn>

      <v-btn>
        <v-icon color="error">mdi-emoticon-devil</v-icon>
        Неправильные
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
export default {
  name: "ResultsDialogTabs",
  computed: {
    value: {
      get() {
        return this.getResultsDialogTab;
      },
      set(value) {
        this.toggle_results_dialog_tab(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
