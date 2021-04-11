<template>
  <v-app>
    <exercise-list />
  </v-app>
</template>

<script>
import router from "../router"
import ExerciseList from "../components/exercise/exercise-list.vue"

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  components: {
    ExerciseList,
  },
  methods: {
    login() {
      router.push({ path: "/main/exercises" })
    },
  },
}
</script>
