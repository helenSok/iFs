<template>
  <v-app>
    <app-header />
    <app-navbar />
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "../components/app-header.vue"
// import AppMain from "../components/layout/app-main.vue"
import AppNavbar from "../components/app-navbar.vue"

export default {
  name: "default-layout",
  components: {
    AppHeader,
    AppNavbar,
    // AppMain,
  },
}
</script>
