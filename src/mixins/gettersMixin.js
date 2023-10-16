import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getCorrectAnswersCount",
      "getSnackbarValue",
      "getNextExample",
      "getResultsDialog",
      "getResultsDialogTab",
      "getWrongAnswersCount",
      "getWrongAnswers",
      "getCorrectAnswers",
      "getSnackbarText",
      "getSnackbarColor",
      "getTypesSelected",
      "getTypesSelectedLength",
      "getStartCheckingBtnValid",
      "getType",
      "getFormatingTypesSelected",
    ]),
  },
};
