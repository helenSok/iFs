<template>
  <v-app-bar app>
    <app-nav-icon v-if="!drawer_icon" />
    <v-toolbar-title class="pl-2">Тренажер "Идентификация личности"</v-toolbar-title>
    <v-spacer />
    <!-- <template v-if="finish"> -->
    <template>
      <v-toolbar-title class="pr-4">Правильных ответов {{ rightAnswer }} из {{ right_answer.length }}</v-toolbar-title>
      <v-btn @click="refresh()" outlined class="mr-2">Продолжить</v-btn>
      <v-btn @click="gotoMain()" outlined>Завершить</v-btn>
    </template>
    <template>
      <v-btn @click="set_updateFinish" v-if="btnEnd1" outlined>Завершить</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex"
import AppNavIcon from "./app-nav-icon.vue"
import router from "../router"
export default {
  name: "app-header",
  components: {
    AppNavIcon,
  },
  props: {
    source: String,
  },
  watch: {
    countAnswer() {
      if (this.countAnswer === this.maxAnswer) {
        this.btnEnd1 = true
      } else {
        this.btnEnd1 = false
      }
    },
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["change_drawer_icon"]),
    ...mapActions("exercises", ["udateFinish"]),
    ...mapActions("parameters", ["updateCountAnswer", "resetChecked", "resetTabIndex"]),
    ...mapActions("materials", ["getMaterials", "getParameters"]),
    gotoMain() {
      this.udateFinish(false)
      router.push("/main/exercises")
    },
    refresh() {
      this.getMaterials()
      // this.getMaterials(this.material_type)
      // this.resetChecked()
      // this.udateFinish(false)
      // this.resetTabIndex(0)
      // this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", 0)
    },
    set_updateFinish() {
      this.udateFinish(true)
      this.updateCountAnswer(-1)
    },
  },
  computed: {
    ...mapState("exercises", ["rightAnswer", "current_exercise", "maxAnswer", "finish", "selected_exercise_type"]),
    ...mapState("materials", ["right_answer"]),
    material_type() {
      //todo дублирование переменной
      let settings = {}
      let exercise_setting = this.current_exercise.exercise_settings.find((t) => t.exercise_type_id == this.selected_exercise_type + 1)

      Object.assign(settings, { type_id: exercise_setting.material_type_id })
      Object.assign(settings, { setting_races: exercise_setting.setting_races.map((o) => o.race_id) })
      return settings
    },
    ...mapState({
      drawer_icon: (state) => state.app.drawer_icon,
    }),
    ...mapState("parameters", ["countAnswer"]),
    // ...mapState({
    //   countAnswer: (state) => state.parameters.countAnswer, //todo Использовать везде эту запись
    // }),
    btnEnd() {
      if (this.countAnswer === this.maxAnswer) {
        return true
      } else {
        return false
      }
    },
  },
  data: () => ({
    drawer: null,
    btnEnd1: false,
  }),
}
</script>
