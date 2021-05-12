<template>
  <v-app>
    <!-- <router-view /> -->
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout"
    },
  },
}
</script>
