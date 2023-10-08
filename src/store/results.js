export default {
  state: {
    correctAnswers: [],
    wrongAnswers: [],
    nextExample: false,
  },
  mutations: {
    add_answer(state, { key, example }) {
      state[key].push(example);
    },
    change_next_example(state, payload) {
      state.nextExample = payload;
    },
  },
  getters: {
    getCorrectAnswers: (state) => state.correctAnswers,
    getWrongAnswers: (state) => state.wrongAnswers,
    getCorrectAnswersCount: (state) => state.correctAnswers.length,
    getWrongAnswersCount: (state) => state.wrongAnswers.length,
    getNextExample: (state) => state.nextExample,
  },
};
