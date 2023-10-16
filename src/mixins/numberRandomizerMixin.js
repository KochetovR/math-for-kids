export default {
  methods: {
    setRandomNumber(min = 2, max = 9) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    },
  },
};
