<template>
  <v-dialog v-model="dialog" max-width="300" max-height="60%">
    <v-card class="mx-auto pa-3 pt-6" width="300">
      <ResultsDialogTabs />
      <ResultsDialogList v-if="resultItems.length" :items="resultItems" />
      <div v-else class="mt-2 text-center">Нет результатов</div>
      <v-btn
        variant="text"
        color="primary"
        class="mt-4"
        @click="toggle_results_dialog(false)"
      >
        Закрыть
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import ResultsDialogList from "./ResultsDialogList.vue";
import ResultsDialogTabs from "./ResultsDialogTabs.vue";

export default {
  name: "ResultDialog",
  components: { ResultsDialogTabs, ResultsDialogList },
  computed: {
    dialog: {
      get() {
        return this.getResultsDialog;
      },
      set() {
        this.toggle_results_dialog();
      },
    },
    resultItems() {
      return this.getResultsDialogTab === 0
        ? this.getCorrectAnswers
        : this.getWrongAnswers;
    },
  },
};
</script>

<style lang="scss" scoped></style>
