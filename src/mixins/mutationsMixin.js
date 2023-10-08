import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "toggle_results_dialog",
      "change_snackbar_value",
      "add_answer",
      "change_next_example",
      "close_snackbar",
      "toggle_results_dialog_tab",
    ]),
  },
};
