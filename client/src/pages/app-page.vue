<template>
  <v-app>
    <app-header />
    <app-navbar />
    <app-main />
  </v-app>
</template>

<script>
import router from "../router"
import AppHeader from "../components/layout/app-header.vue"
import AppNavbar from "../components/layout/app-navbar.vue"
import AppMain from "../components/layout/app-main.vue"

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  components: {
    AppHeader,
    AppNavbar,
    AppMain,
  },
  methods: {
    login() {
      router.push({ path: "/main/exercises" })
    },
  },
}
</script>
