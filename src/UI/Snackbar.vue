<template>
  <v-snackbar
    v-model="snackbarModel"
    absolute
    location="top"
    :color="getSnackbarColor"
    :timeout="2000"
  >
    {{ getSnackbarText }}
    <v-icon>{{ isIcon }}</v-icon>
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="changeSnackbar">
        {{ isButtonText }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackbarComponent",
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    snackbarModel: {
      get() {
        return this.getSnackbarValue;
      },
      set() {
        this.changeSnackbar();
      },
    },
    isSuccess() {
      return this.getSnackbarColor === "success";
    },
    isIcon() {
      return this.isSuccess ? "mdi-emoticon" : "mdi-emoticon-devil";
    },
    isButtonText() {
      return this.isSuccess ? "Далее" : "Закрыть";
    },
  },
  methods: {
    changeSnackbar() {
      if (this.isSuccess) {
        this.change_next_example(true);
        this.close_snackbar();
      } else {
        this.close_snackbar();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
