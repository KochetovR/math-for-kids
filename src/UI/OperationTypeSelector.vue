<template>
  <p class="mt-6 text-h6">Что проверяем?</p>
  <v-row dense class="justify-center">
    <v-col cols="12" class="d-flex justify-center">
      <v-chip-group v-model="typeSelectModel" multiple class="justify-center">
        <v-chip
          v-for="title in selectItems"
          :key="title"
          variant="elevated"
          color="primary"
          label
          size="large"
          class="d-flex justify-center align-center"
        >
          {{ title }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "OperationTypeSelector",
  computed: {
    selectItems() {
      return ["Умножение", "Сложение", "Деление", "Вычитание"];
    },
    typeSelectModel: {
      get() {
        return this.getTypesSelected;
      },
      set(val) {
        this.change_type_select(val);
        if (val.length) {
          this.change_start_checking_btn_valid(true);
        } else {
          this.change_start_checking_btn_valid(false);
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.v-chip-group .v-chip {
  min-width: 115px;
}
</style>
