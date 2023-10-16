<template>
  <v-app>
    <v-main>
      <Snackbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/UI/Snackbar.vue";
export default {
  name: "App",
  components: {
    Snackbar,
  },
};
</script>

<style lang="scss">
.v-application {
  background-color: darkseagreen;
}
</style>
