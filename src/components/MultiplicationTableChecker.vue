<template>
  <v-sheet
    elevation="12"
    max-width="90%"
    rounded="lg"
    width="90%"
    height="90%"
    class="pa-4 text-center mx-auto mt-10 d-flex flex-column justify-space-between"
  >
    <div>
      <ComponentTitle :title="'Умножение'" />
      <v-container class="d-flex align-center justify-center flex-wrap px-0">
        <LeftOperand :number="firstLeftOperand" />&nbsp;
        <span class="text-h2 font-weight-bold">·</span>&nbsp;
        <LeftOperand :number="secondLeftOperand" />&nbsp;
        <span class="text-h2 font-weight-bold">=</span>&nbsp;
        <RightOperand @inputAnswer="inputAnswer" />
        <v-btn
          color="success"
          size="x-large"
          :block="$vuetify.display.xs"
          @click="checkAnswer"
          :disabled="!answer && !getNextExample"
        >
          Проверить
        </v-btn>
      </v-container>
      <v-btn
        :block="$vuetify.display.xs"
        color="primary"
        size="x-large"
        @click="complete"
      >
        Завершить
      </v-btn>
    </div>
    <ResultsBlock />
    <ResultsDialog />
  </v-sheet>
</template>

<script>
import ComponentTitle from "@/UI/Title.vue";
import LeftOperand from "@/UI/LeftOperand";
import RightOperand from "@/UI/RightOperand";
import ResultsBlock from "./ResultsBlock/ResultsBlock.vue";
import ResultsDialog from "./ResultDialog/ResultDialog.vue";

export default {
  name: "MultiplicationTableChecker",
  components: {
    ComponentTitle,
    LeftOperand,
    RightOperand,
    ResultsBlock,
    ResultsDialog,
  },
  data() {
    return {
      answer: null,
      firstLeftOperand: 0,
      secondLeftOperand: 0,
      correctAnswer: null,
    };
  },
  mounted() {
    this.firstLeftOperand = this.setRandomValues();
    this.secondLeftOperand = this.setRandomValues();
    this.correctAnswer = this.firstLeftOperand * this.secondLeftOperand;
  },
  methods: {
    inputAnswer(e) {
      this.answer = +e;
    },
    complete() {
      this.toggle_results_dialog(true);
    },
    checkAnswer() {
      this.change_next_example(false);
      if (this.answer === this.correctAnswer) {
        this.change_snackbar_value({
          value: true,
          text: "Правильно! Ты молодец :)",
          color: "success",
        });
        this.add_answer({
          key: "correctAnswers",
          example: `${this.firstLeftOperand} * ${this.secondLeftOperand} = ${this.correctAnswer}`,
        });
      } else {
        this.change_snackbar_value({
          value: true,
          text: "Попробуй еще раз.",
          color: "error",
        });
        this.add_answer({
          key: "wrongAnswers",
          example: `${this.firstLeftOperand} * ${this.secondLeftOperand} = ${this.correctAnswer}`,
        });
      }
    },
  },
  watch: {
    getNextExample(e) {
      if (e) {
        this.answer = null;
        this.firstLeftOperand = this.setRandomValues();
        this.secondLeftOperand = this.setRandomValues();
        this.correctAnswer = this.firstLeftOperand * this.secondLeftOperand;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
