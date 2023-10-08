export default {
  state: {
    snackbarValue: false,
    snackbarText: "",
    snackbarColor: "success",
  },
  mutations: {
    change_snackbar_value(state, { value, text, color }) {
      state.snackbarValue = value;
      state.snackbarText = text;
      state.snackbarColor = color;
    },
    close_snackbar(state) {
      state.snackbarValue = false;
      state.snackbarText = "";
      state.snackbarColor = "";
    },
  },
  getters: {
    getSnackbarValue: (state) => state.snackbarValue,
    getSnackbarText: (state) => state.snackbarText,
    getSnackbarColor: (state) => state.snackbarColor,
  },
};
