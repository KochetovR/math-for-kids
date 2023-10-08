export default {
  state: {
    resultsDialog: false,
    resultsDialogTab: 0,
  },
  mutations: {
    toggle_results_dialog(state, payload) {
      state.resultsDialog = payload;
    },
    toggle_results_dialog_tab(state, payload) {
      state.resultsDialogTab = payload;
    },
  },
  getters: {
    getResultsDialog: (state) => state.resultsDialog,
    getResultsDialogTab: (state) => state.resultsDialogTab,
  },
};
