export default {
  state: {
    correctAnswers: [],
    wrongAnswers: [],
    nextExample: false,
    startCheckingBtnValid: false,
  },
  mutations: {
    add_answer(state, { key, example, type }) {
      state[key].push({ example, type });
    },
    change_next_example(state, payload) {
      state.nextExample = payload;
    },
    change_start_checking_btn_valid(state, payload) {
      state.startCheckingBtnValid = payload;
    },
  },
  getters: {
    getCorrectAnswers: (state) => state.correctAnswers,
    getWrongAnswers: (state) => state.wrongAnswers,
    getCorrectAnswersCount: (state) => state.correctAnswers.length,
    getWrongAnswersCount: (state) => state.wrongAnswers.length,
    getNextExample: (state) => state.nextExample,
    getStartCheckingBtnValid: (state) => state.startCheckingBtnValid,
  },
};
