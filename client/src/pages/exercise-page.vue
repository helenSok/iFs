<template>
  <exercise-list />
</template>

<script>
import router from "../router"
import ExerciseList from "../components/exercise/exercise-list.vue"
// import { mapActions } from "vuex"

export default {
  name: "exercise-page",
  data: () => ({
    email: "",
    password: "",
  }),
  components: {
    ExerciseList,
  },
  mounted() {
    // this.getExerciseTypes()
  },
  methods: {
    // ...mapActions("exercises", ["getExerciseTypes"]),
    login() {
      router.push({ path: "/main/exercises" })
    },
  },
}
</script>
