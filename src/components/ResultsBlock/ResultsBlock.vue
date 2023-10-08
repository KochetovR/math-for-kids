<template>
  <div class="d-flex align-center justify-end">
    <span class="mr-1">Результаты:</span>
    <ResultItem :count="getCorrectAnswersCount" class="mr-4" />
    <v-divider vertical></v-divider>
    <ResultItem
      :count="getWrongAnswersCount"
      :iconColor="'error'"
      :icon="'mdi-emoticon-devil'"
    />
  </div>
</template>

<script>
import ResultItem from "./ResultItem.vue";

export default {
  name: "ResultsBlock",
  components: { ResultItem },
};
</script>

<style lang="scss" scoped></style>
