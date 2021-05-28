<template>
  <v-app-bar app>
    <app-nav-icon v-if="!drawer_icon" />
    <v-toolbar-title class="pl-2">Тренажер "Идентификация личности"</v-toolbar-title>
    <v-spacer />
    <template v-if="btn_finish">
      <v-toolbar-title class="pr-4"
        >Правильных ответов {{ count_right_answer }} из
        {{ right_answer.length }}</v-toolbar-title
      >
      <v-btn @click="refresh()" outlined class="mr-2">Продолжить</v-btn>
      <v-btn @click="gotoMain()" outlined>Главная</v-btn>
    </template>
    <template>
      <v-btn @click="set_updateFinish" outlined>Завершить</v-btn> 
      <!-- v-if="btnEnd1"  -->
    </template>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"
import AppNavIcon from "./app-nav-icon.vue"
import router from "../router"
export default {
  name: "app-header",
  data: () => ({
    drawer: null,
    btnEnd1: false,
    btn_finish: false,
    count_right_answer: 0
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
      this.set_disabled_checkbox(false)
    },
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations("exercises", ["set_disabled_checkbox"]),
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
      this.set_disabled_checkbox(false)
      // this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", 0) //todo интересная запись
    },
    set_right_answer() { // Получаем количество правильных ответов и закрашиваем checkbox
      const count_right_answer = this.parameter_material_description
      .map((t) => t)
      .filter((f) => this.right_answer.map((e) => e.id).includes(f.id))
      let count = count_right_answer.filter(t => t.check == true).length
      this.set_false_answer()
      this.count_right_answer = count
    },
    set_false_answer() {
      let user_answer = this.parameter_material_description.filter(e => e.check == true)
      user_answer.forEach(element => {
        if (this.right_answer.find(t => t.id == element.id)) {
          element.color = "green"
        }
        else {
          element.color = "red"
        }
      });
      this.right_answer.forEach(element => {
        this.parameter_material_description.find(t => t.id == element.id).check = true
        this.parameter_material_description.find(t => t.id == element.id).color = "green"

      });
      // this.parameter_material_description.forEach(element => {
      //   if (this.right_answer.find(t => t.id != element.id) && element.check === true) {
      //     console.log("Неверный")
      //   }
      //   else {
      //     console.log("Верный")
      //   }
      // });
    },
    set_updateFinish() {
      this.udateFinish(true)
      this.updateCountAnswer(-1)
      this.btnEnd1 = false
      this.btn_finish = true
      this.set_disabled_checkbox(true)
      this.set_right_answer()
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
    ...mapState("materials", ["right_answer", "parameter_material_description"]),
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
