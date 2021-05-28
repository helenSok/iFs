<template>
  <v-container fluid>
    <parameter-head
      :parameter_material_head="parameter_material_head"
      :parameter_material_character="parameter_material_character"
      :parameter_material_description="parameter_material_description"
      :parameter_character_by_head_id="parameter_character_by_head_id"
      :right_answer="right_answer"
      :user_answers="user_answers"
      :exercise_type_id="exercise_type_id"
      @parameter_head_id="set_parameter_head_id"
    >
    </parameter-head>
    <!-- <head-element></head-element> -->
    <v-row>
      <v-col cols="12" sm="8" md="3" class="pr-0 ">
        <parameter-character
          :parameter_material_character="parameter_character_by_head_id"
          :parameter_material_description="parameter_material_description"
        >
          <!-- @set_check="get_user_answers" -->
        </parameter-character>
        <!-- <material-image></material-image> -->
      </v-col>
      <v-col md="9" class="pl-0">
        <!-- <element-param /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"
import ParameterCharacter from "../components/parameters/parameter-character.vue"
import ParameterHead from "../components/parameters/parameter-head.vue"

export default {
  name: "exercise-first",
  components: {
    ParameterHead,
    ParameterCharacter,
  },
  data() {
    return {
      parameter_head_id: 0,
      parameter_character_by_head_id: [],
    }
  },
  props: ["id"],
  created() {},
  mounted() {
    this.getMaterials()
    console.log(this.id)
  },
  computed: {
    ...mapState("exercises", [
      "exercise_setting",
      "current_exercise",
      "selected_exercise_type",
      "exercise_type_id",
      "user_answers",
    ]),
    ...mapState("materials", [
      "right_answer",
      "parameter_material_head",
      "parameter_material_character",
      "parameter_material_description",
    ]),
  },
  methods: {
    ...mapMutations("exercises", [
      "setMaxAnswer",
      "set_count_selected_checkbox",
      "set_user_answers",
    ]),
    // get_user_answers() {
    //   this.user_answers = this.parameter_material_description.filter((t) => t.check == true)
    //   this.set_count_selected_checkbox(this.user_answers.length)
    // },
    ...mapActions({
      getMaterials: "materials/getMaterials",
    }),
    set_parameter_head_id(id) {
      this.parameter_head_id = id
      this.set_parameter_character_by_head_id(id)
    },
    set_parameter_character_by_head_id(id) {
      this.parameter_character_by_head_id = this.parameter_material_character.filter(
        (t) => t.parameter_id == id
      )
    },
  },
  watch: {
    parameter_material_head() {
      this.set_count_selected_checkbox(0)
      this.set_user_answers()
    },
    $route() {
      console.log("HElloo nigs")
    },
  },
}
</script>
