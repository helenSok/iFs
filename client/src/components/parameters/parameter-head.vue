<template>
  <v-card>
    <v-card-title class="px-0 py-0">
      <v-toolbar height="45">
        <v-tabs grow v-model="active_tab">
          <v-tab
            :disabled="isDisabled"
            v-for="(element, i) in parameter_material_head"
            :key="i"
            @click="set_parameter_head_id(element.id)"
            :class="element.active_class"
          >
            {{ element.name }}
            <template>
              {{ count_right_answer(element.id) }} /{{ count_parameters(element.id) }}
            </template>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "parameter-head",
  data() {
    return {
      //active_tab_before: 0,
      active_tab_before: 0,
      active_tab: 0,
      answer: 0,
      start_index: 0,
      yet_full: false,
    }
  },
  props: [
    "user_answers",
    "right_answer",
    "parameter_material_head",
    "parameter_material_character",
    "parameter_material_description",
    "parameter_character_by_head_id",
    "exercise_type_id",
  ],
  computed: {
    isDisabled() {
      if (this.exercise_type_id == 1) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    count_right_answer(id) {
      let character_ids = this.parameter_material_character
        .filter((t) => t.parameter_id == id)
        .map((f) => f.id)
      let desc = this.parameter_material_description.filter((t) =>
        character_ids.includes(t.parameter_id)
      )
      let check_desc = desc.filter((t) => t.check == true).map((f) => f.id)
      let count_answer = this.right_answer.filter((f) => check_desc.includes(f.id))
      return count_answer.length
    },
    count_parameters(id) {
      let character = this.parameter_material_character.filter((t) => t.parameter_id == id)
      return character.length
    },
    set_active_tab(id) {
      this.active_tab = this.parameter_material_head.map((t) => t.id).indexOf(id)
    },
    set_active_class() {
      this.parameter_material_head[this.active_tab].active_class = "primary--text"
    },
    get_count_user_answer() {
      //Сделать два геттера
      let character_ids = this.parameter_character_by_head_id.map((t) => t.id)
      let count_user_answer = this.parameter_material_description
        .filter((t) => character_ids.includes(t.parameter_id))
        .filter((o) => o.check == true).length
      return count_user_answer
    },
    set_parameter_head_id(id) {
      if (id == null) {
        this.active_tab = 0
        this.$emit("parameter_head_id", this.parameter_material_head[this.active_tab].id)
        this.parameter_material_head[this.active_tab].active_class = "primary--text"
        return
      }
      this.active_tab_before = this.active_tab
      this.set_active_tab(id)
      this.parameter_material_head[this.active_tab].active_class = "primary--text"

      let count_user_answer = this.get_count_user_answer()
      let count_character = this.parameter_character_by_head_id.length
      if (count_user_answer != count_character && this.active_tab != this.active_tab_before) {
        this.parameter_material_head[this.active_tab_before].active_class = "secondary--text"
      }
      if (count_user_answer == count_character) {
        //todo
        this.yet_full = true
      }
      this.$emit("parameter_head_id", id)
      // let index = this.parameter_material_head.find(t => t.id = id) //todo нужен ли текущий индекс?
    },
    get_empty_fields() {
      let empty_field = this.parameter_material_head.filter(
        (t) => t.active_class == "secondary--text"
      )
      //console.log(empty_field)
      return empty_field
    },
    get_empty_character() {
      let character_ids = this.parameter_material_character.map((t) => t.id)
      let empty_checked = this.parameter_material_description.filter((t) =>
        character_ids.includes(t.parameter_id)
      )
      //todo доделать поиск пустых раздело
      console.log(empty_checked)
    },
    find_empty_field() {
      let start_index = this.start_index
      for (let index = start_index; index < this.parameter_material_head.length; index++) {
        if (this.parameter_material_head[index].active_class == "secondary--text") {
          //console.log(this.parameter_material_head[index])
          this.active_tab = index
          return
        }
      }
    },
    goto_emtpy_field() {},
    next_parameter_head() {
      let count_user_answer = this.get_count_user_answer()
      let count_character = this.parameter_character_by_head_id.length
      // console.log(this.active_tab_before)
      // console.log(this.active_tab)
      // if (count_user_answer == count_character) {
      //   this.yet_full = true
      // } else {
      //   this.yet_full = false
      // }
      // console
      if (count_user_answer != count_character) {
        this.yet_full = false
      }
      if (this.yet_full == false && count_user_answer == count_character) {
        //let test = this.get_empty_fields()

        this.parameter_material_head[this.active_tab].active_class = "primary--text"
        this.start_index = this.active_tab
        let promise = new Promise((res) => {
          setTimeout(() => {
            this.find_empty_field()
            res(this.active_tab)
          }, 300)
        })
        promise.then((value) => {
          this.set_parameter_head_id(this.parameter_material_head[value].id)
        })
      }
      let test = this.get_empty_fields()
      let lastIndex = test[test.length - 1]
      //console.log(this.parameter_material_head.indexOf(lastIndex))
      //console.log(this.parameter_material_head.indexOf(lastIndex))
      if (
        // this.parameter_material_head.length - 1 == this.active_tab && //todo
        this.parameter_material_head.indexOf(lastIndex) < this.active_tab && //todo взять длину массива которые незаполненеы
        count_user_answer == count_character
      ) {
        //this.get_empty_character()
        this.start_index = 0
        console.log("Перейти на незаполненный раздел")
      }
    },
  },
  watch: {
    parameter_material_head() {
      this.set_parameter_head_id(null)
    },
    user_answers() {
      this.next_parameter_head()
    },
  },
}
</script>

<style scoped>
::v-deep .v-tab--disabled {
  opacity: 1 !important;
}
</style>
