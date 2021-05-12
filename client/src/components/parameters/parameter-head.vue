<template>
  <v-card>
    <v-card-title class="px-0 py-0">
      <v-toolbar height="45">
        <v-tabs grow v-model="active_tab">
          <v-tab
            v-for="(element, i) in parameter_material_head"
            :key="i"
            @click="set_parameter_head_id(element.id)"
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
      active_tab: 0,
      answer: 0,
    }
  },
  props: [
    "user_answers",
    "right_answer",
    "parameter_material_head",
    "parameter_material_character",
    "parameter_material_description",
    "parameter_character_by_head_id",
  ],
  computed: {},
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
    set_parameter_head_id(id) {
      if (id == null) {
        this.$emit("parameter_head_id", this.parameter_material_head[this.active_tab].id)
        this.active_tab = 0
        return
      }
      this.$emit("parameter_head_id", id)
      // let index = this.parameter_material_head.find(t => t.id = id) //todo нужен ли текущий индекс?
    },

    get_empty_character() {
      let character_ids = this.parameter_material_character.map((t) => t.id)
      let empty_checked = this.parameter_material_description.filter((t) =>
        character_ids.includes(t.parameter_id)
      )
      //todo доделать поиск пустых раздело
      console.log(empty_checked)
    },
    next_parameter_head() {
      let character_ids = this.parameter_character_by_head_id.map((t) => t.id)
      let count_user_answer = this.parameter_material_description
        .filter((t) => character_ids.includes(t.parameter_id))
        .filter((o) => o.check == true).length
      let count_character = this.parameter_character_by_head_id.length
      console.log(this.parameter_material_head.length)
      console.log(this.active_tab)
      if (
        this.parameter_material_head.length - 1 == this.active_tab &&
        count_user_answer == count_character
      ) {
        this.get_empty_character()
        console.log("Перейти на незаполненный раздел")
        return
      }
      if (
        count_user_answer == count_character &&
        this.parameter_material_head.length - 1 > this.active_tab //todo если заполнен раздел переходить не нужно
      ) {
        let promise = new Promise((res) => {
          setTimeout(() => {
            this.active_tab++
            res(this.active_tab)
          }, 500)
        })
        promise.then((value) => {
          this.set_parameter_head_id(this.parameter_material_head[value].id)
        })
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
