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
      <ComponentTitle :title="isTitle" />
      <OperationTypeSelector />
      <v-container
        v-if="getTypesSelectedLength && !getStartCheckingBtnValid"
        class="d-flex align-center justify-center flex-wrap px-0"
      >
        <LeftOperand :number="firstLeftOperand" />&nbsp;
        <span class="text-h2 font-weight-bold">{{ mathOperator }}</span>
        &nbsp;
        <LeftOperand :number="secondLeftOperand" />&nbsp;
        <span class="text-h2 font-weight-bold">=</span>&nbsp;
        <RightOperand @inputAnswer="inputAnswer" />
        <v-btn
          color="success"
          size="x-large"
          :block="$vuetify.display.xs"
          @click="checkAnswer"
          :disabled="!answer && !getNextExample && getSnackbarValue"
        >
          Проверить
        </v-btn>
      </v-container>
      <v-btn
        v-if="getTypesSelectedLength && !getStartCheckingBtnValid"
        :block="$vuetify.display.xs"
        color="primary"
        size="x-large"
        @click="complete"
      >
        Завершить
      </v-btn>
      <v-btn
        v-if="getTypesSelectedLength && getStartCheckingBtnValid"
        :block="isBtnBlock"
        color="success"
        size="x-large"
        class="mt-3"
        @click="startChecking"
      >
        Начать
      </v-btn>
    </div>
    <ResultsBlock v-if="getTypesSelectedLength && !getStartCheckingBtnValid" />
    <ResultsDialog :typeIndex="typeIndex" />
  </v-sheet>
</template>

<script>
import ComponentTitle from "@/UI/Title.vue";
import LeftOperand from "@/UI/LeftOperand";
import RightOperand from "@/UI/RightOperand";
import OperationTypeSelector from "@/UI/OperationTypeSelector";
import ResultsBlock from "./ResultsBlock/ResultsBlock.vue";
import ResultsDialog from "./ResultDialog/ResultDialog.vue";

export default {
  name: "MathCheck",
  components: {
    ComponentTitle,
    LeftOperand,
    RightOperand,
    OperationTypeSelector,
    ResultsBlock,
    ResultsDialog,
  },
  data() {
    return {
      answer: null,
      firstLeftOperand: 0,
      secondLeftOperand: 0,
      correctAnswer: null,
      typeIndex: null,
      mathOperator: null,
    };
  },
  computed: {
    isTitle() {
      return this.getTypesSelectedLength && !this.getStartCheckingBtnValid
        ? this.getFormatingTypesSelected[this.typeIndex]?.title
        : "Добро пожаловать!";
    },
    isBtnBlock() {
      return this.$vuetify.display.xs || this.$vuetify.display.sm;
    },
  },
  methods: {
    inputAnswer(e) {
      this.answer = +e;
    },
    complete() {
      this.toggle_results_dialog(true);
    },
    checkAnswer() {
      if (this.answer === this.correctAnswer) {
        this.change_next_example(false);
        this.answer = null;
        this.change_snackbar_value({
          value: true,
          text: "Правильно! Ты молодец :)",
          color: "success",
        });
        this.add_answer({
          key: "correctAnswers",
          type: this.getType,
          example: `${this.firstLeftOperand} ${this.mathOperator} ${this.secondLeftOperand} = ${this.correctAnswer}`,
        });
      } else {
        this.change_snackbar_value({
          value: true,
          text: "Попробуй еще раз.",
          color: "error",
        });
        this.add_answer({
          key: "wrongAnswers",
          type: this.getType,
          example: `${this.firstLeftOperand} ${this.mathOperator} ${this.secondLeftOperand} = ${this.answer}`,
        });
      }
    },
    startChecking() {
      this.setType();
      this.setExample();
      this.change_start_checking_btn_valid(false);
    },
    setType() {
      if (this.getTypesSelectedLength === 1) {
        this.typeIndex = 0;
        this.change_type(this.getFormatingTypesSelected[0].type);
      } else {
        const max = this.getTypesSelectedLength - 1;
        const index = this.setRandomNumber(0, max);
        this.typeIndex = index;
        this.change_type(this.getFormatingTypesSelected[index].type);
      }
    },
    setValuesForMultiplication() {
      this.answer = null;
      this.mathOperator = "·";
      this.firstLeftOperand = this.setRandomNumber();
      this.secondLeftOperand = this.setRandomNumber();
      this.correctAnswer = this.firstLeftOperand * this.secondLeftOperand;
    },
    setValuesForAddition() {
      this.answer = null;
      this.mathOperator = "+";
      this.firstLeftOperand = this.setRandomNumber();
      this.secondLeftOperand = this.setRandomNumber();
      this.correctAnswer = this.firstLeftOperand + this.secondLeftOperand;
    },
    setValuesForDivision() {
      this.answer = null;
      this.mathOperator = ":";
      this.correctAnswer = this.setRandomNumber();
      this.secondLeftOperand = this.setRandomNumber();
      this.firstLeftOperand = this.secondLeftOperand * this.correctAnswer;
    },
    setValuesForSubtraction() {
      this.answer = null;
      this.mathOperator = "-";
      this.correctAnswer = this.setRandomNumber();
      this.secondLeftOperand = this.setRandomNumber();
      this.firstLeftOperand = this.secondLeftOperand + this.correctAnswer;
    },
    setExample() {
      switch (this.getType) {
        case 1:
          this.setValuesForMultiplication();
          break;
        case 2:
          this.setValuesForAddition();
          break;
        case 3:
          this.setValuesForDivision();
          break;
        case 4:
          this.setValuesForSubtraction();
          break;
        default:
          break;
      }
    },
  },
  watch: {
    getNextExample(e) {
      if (e) {
        this.setType();
        this.setExample();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
