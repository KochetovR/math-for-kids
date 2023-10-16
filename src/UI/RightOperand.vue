<template>
  <v-col xs="6" sm="5" md="4" lg="3" xl="2">
    <v-text-field
      v-model="answer"
      label="Ответ"
      variant="outlined"
      width="100"
      hide-details
      class="font-weight-bold"
      type="number"
      name="answer"
      @input="inputAnswer"
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  name: "RightOperand",
  data() {
    return {
      answer: null,
    };
  },
  methods: {
    inputAnswer() {
      this.$emit("inputAnswer", this.answer);
    },
  },
  watch: {
    getNextExample(e) {
      if (e) {
        this.answer = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-text-field input {
  font-size: 3.5rem;
}
::v-deep .v-text-field input.v-field__input {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
