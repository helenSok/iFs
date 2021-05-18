<template>
  <v-app-bar app>
    <app-nav-icon v-if="!drawer_icon" />
    <v-toolbar-title class="pl-2">Тренажер "Идентификация личности"</v-toolbar-title>
    <v-spacer />
    <template v-if="btn_finish">
      <v-toolbar-title class="pr-4"
        >Правильных ответов {{ count_selected_checkbox }} из
        {{ right_answer.length }}</v-toolbar-title
      >
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
  data: () => ({
    drawer: null,
    btnEnd1: false,
    btn_finish: false,
  }),
  components: {
    AppNavIcon,
  },
  props: {
    source: String,
  },
  watch: {
    count_selected_checkbox() {
      if (this.right_answer.length === this.count_selected_checkbox) {
        this.btnEnd1 = true
      } else {
        this.btnEnd1 = false
      }
    },
    $route() {
      //todo отслеживание изменения маршрута
      //todo при задержке в 0,3 сек возможно нажать на checkbox тогда не появиться кнопка завершить
      this.btn_finish = false
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
      this.btn_finish = false
    },
    refresh() {
      this.getMaterials()
      this.btn_finish = false
      // this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", 0) //todo интересная запись
    },
    set_updateFinish() {
      this.udateFinish(true)
      this.updateCountAnswer(-1)
      this.btnEnd1 = false
      this.btn_finish = true
    },
  },
  computed: {
    ...mapState("exercises", [
      "rightAnswer",
      "current_exercise",
      "maxAnswer",
      "finish",
      "selected_exercise_type",
      "count_selected_checkbox",
    ]),
    ...mapState("materials", ["right_answer"]),
    material_type() {
      //todo дублирование переменной
      let settings = {}
      let exercise_setting = this.current_exercise.exercise_settings.find(
        (t) => t.exercise_type_id == this.selected_exercise_type + 1
      )

      Object.assign(settings, { type_id: exercise_setting.material_type_id })
      Object.assign(settings, {
        setting_races: exercise_setting.setting_races.map((o) => o.race_id),
      })
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
      if (this.right_answer.length === this.count_selected_checkbox) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>
