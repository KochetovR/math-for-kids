export default {
  methods: {
    setRandomValues() {
      const min = 2;
      const max = 9;
      const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
      return num1;
    },
  },
};
