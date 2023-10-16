export default {
  state: {
    typesSelected: [],
    type: null,
  },
  mutations: {
    change_type_select(state, payload) {
      state.typesSelected = payload;
    },
    change_type(state, payload) {
      state.type = payload;
    },
  },
  getters: {
    getTypesSelected: (state) => state.typesSelected,
    getType: (state) => state.type,
    getTypesSelectedLength: (state) => state.typesSelected.length,
    getFormatingTypesSelected: (state) => {
      return state.typesSelected.map((el) => {
        switch (el) {
          case 0:
            return {
              title: "Умножение",
              type: 1,
            };
          case 1:
            return {
              title: "Сложение",
              type: 2,
            };
          case 2:
            return {
              title: "Деление",
              type: 3,
            };
          case 3:
            return {
              title: "Вычитание",
              type: 4,
            };
          default:
            return "";
        }
      });
    },
  },
};
