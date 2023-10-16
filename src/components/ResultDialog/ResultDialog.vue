<template>
  <v-dialog
    v-model="dialog"
    max-width="340"
    height="500"
    transition="dialog-top-transition"
  >
    <v-card class="mx-auto pa-3 pt-2" width="340">
      <ResultsDialogTabs />
      <PopupTitle :title="popupTitle" class="text-center" />
      <v-divider></v-divider>
      <v-carousel
        v-if="carouselItemCount"
        v-model="carouselModel"
        :touch="Boolean(resultItems.length)"
        :show-arrows="false"
        hide-delimiter-background
        :hide-delimiters="carouselItemCount === 1"
        color="primary"
        height="320"
      >
        <v-carousel-item
          v-for="index in getTypesSelected"
          :key="index"
          :value="index"
        >
          <ResultsDialogList v-if="resultItems.length" :items="resultItems" />
          <div v-else class="mt-1">
            <v-alert type="warning" prominent border class="mb-2">
              Нет решенных примеров.
            </v-alert>
            <iframe
              src="https://giphy.com/embed/mcsPU3SkKrYDdW3aAU"
              width="300"
              height="200"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            >
            </iframe>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div v-else class="mt-2 text-center">Нет результатов</div>
      <v-btn
        block
        color="success"
        class="mt-0"
        @click="toggle_results_dialog(false)"
      >
        Закрыть
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import ResultsDialogList from "./ResultsDialogList.vue";
import ResultsDialogTabs from "./ResultsDialogTabs.vue";
import PopupTitle from "@/UI/PopupTitle.vue";

export default {
  name: "ResultDialog",
  components: { ResultsDialogTabs, ResultsDialogList, PopupTitle },
  props: {
    typeIndex: {
      type: [Number, null],
      default: null,
    },
  },
  data() {
    return {
      carouselModel: 0,
    };
  },
  computed: {
    ...mapGetters(["getFormatingTypesSelected"]),
    dialog: {
      get() {
        return this.getResultsDialog;
      },
      set() {
        this.toggle_results_dialog();
      },
    },
    resultItems() {
      return this.getResultsDialogTab === 0
        ? this.getCorrectAnswers.filter(
            (el) => el.type === this.getTypesSelected[this.carouselModel] + 1
          )
        : this.getWrongAnswers.filter(
            (el) => el.type === this.getTypesSelected[this.carouselModel] + 1
          );
    },
    popupTitle() {
      const selectedItem = this.getFormatingTypesSelected.find(
        (el) => el.type === this.getTypesSelected[this.carouselModel] + 1
      );
      return selectedItem?.title;
    },
    carouselItemCount() {
      return this.getTypesSelectedLength;
    },
  },
};
</script>

<style lang="scss" scoped></style>
