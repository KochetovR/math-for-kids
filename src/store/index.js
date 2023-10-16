import { createStore } from "vuex";
import _interface from "./interface";
import results from "./results";
import dialogs from "./dialogs";
import typeSelect from "./typeSelect";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    _interface,
    results,
    dialogs,
    typeSelect,
  },
});
