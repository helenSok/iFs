<template>
  <v-app-bar app>
    <!-- <v-app-bar-nav-icon v-if="!drawer_icon" @click.stop="change_drawer_icon(!drawer_icon)"></v-app-bar-nav-icon> -->
    <app-nav-icon v-if="!drawer_icon" />
    <v-toolbar-title class="pl-2">Тренажер по идентификации личности</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex"
import AppNavIcon from "./app-nav-icon.vue"

export default {
  name: "app-navbar",
  components: {
    AppNavIcon,
  },
  props: {
    source: String,
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["change_drawer_icon"]),
  },
  computed: {
    ...mapState({
      drawer_icon: (state) => state.app.drawer_icon,
    }),
  },
  data: () => ({
    drawer: null,
  }),
}
</script>
