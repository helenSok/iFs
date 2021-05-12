<template>
  <v-app-bar-nav-icon @click.stop="change_drawer_icon(!drawer_icon)"></v-app-bar-nav-icon>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "app-nav-icon",
  components: {},
  props: {
    source: String,
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["change_drawer_icon"]),
  },
  computed: {
    ...mapState({
      drawer_icon: (state) => state.app.drawer_icon, //todo Использовать везде эту запись
    }),
  },
}
</script>
