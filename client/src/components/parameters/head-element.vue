<template>
  <v-card>
    <v-card-title class="px-0 py-0">
      <v-toolbar height="45">
        <v-tabs grow v-model="active_tab">
          <v-tab v-for="(element, i) in getHead()" :key="i" @click="updateSelectedElementID(element)">
            {{ element.name }}
            <template v-if="finish"> {{ countRightAnswer(element) }}/{{ countElementParam(element.id) }} </template>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "head-element",
  data() {
    return {
      parameter_head: [],
      active_tab: 0,
      answer: 0,
    }
  },
  created() {},
  components: {},
  mounted() {
    this.getHeadElements(), this.getParameters(), this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", 0), (this.active_tab = this.$store.state.parameters.selected_parameter_face_id)
    
  },
  computed: {
    ...mapState("parameters", ["parameters", "element_params", "selected_parameter_face_id", "param_descriptions", "right_answer", "tab_index"]),
    ...mapState("materials", ["material_parameters"]),
    ...mapState("exercises", ["finish"]),
    // ...mapGetters({
    //   parameter_description: "parameters/parameter_description",
    // }),
    parameterDescriptions() {
      //console.log(this.parameter_description)
      return this.parameters.map((t) => t).filter((f) => this.material_parameters.map((e) => e.parameter_id).includes(f.id))
    },
    elementParameters() {
      return this.parameters.map((t) => t).filter((f) => this.parameterDescriptions.map((e) => e.parameter_id).includes(f.id))
    },
    head_elements() {
      let elements = this.parameters.map((t) => t).filter((f) => this.elementParameters.map((e) => e.parameter_id).includes(f.id))
      return elements
    },
  },
  methods: {
    ...mapActions("parameters", ["getParameters", "getHeadElements", "putSelectedElementID", "defaultSelectedElementID", "resetTabIndex", "putTabIndex"]),
    ...mapActions("exercises", ["putRightAnswer"]),
    parameter_description() {
      return this.parameters.map((t) => t).filter((f) => this.material_parameters.map((e) => e.parameter_id).includes(f.id))
    },
    getHead() {
      let elements = this.parameters.map((t) => t).filter((f) => this.elementParameters.map((e) => e.parameter_id).includes(f.id))
      this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", elements[this.active_tab].id)
      return elements
    },
    countElementParam(id) {
      return this.elementParameters.filter((t) => t.parameter_id == id).length
    },
    updateSelectedElementID(element) {
      this.head_elements.map((el, index) => {
        if (element.id == el.id) {
          this.active_tab = index
        }
      })
      this.putSelectedElementID(element.id)
      let el = this.head_elements
      let id = element.id
      let query = { el, id }
      this.putTabIndex(query)
    },
    countRightAnswer(head_element) {
      let count = 0
      let head_element_params = this.element_params.filter((t) => t.parameter_id == head_element.id)
      head_element_params.forEach((element) => {
        let param_description = this.param_descriptions.filter((t) => t.parameter_id == element.id)
        param_description.forEach((element) => {
          if (element.check == true && this.material_parameters.find((t) => t.parameter_id == element.id)) {
            count++
          }
        })
      })
      this.allRightAnswer()
      return count
    },
    allRightAnswer() {
      let count = 0

      this.param_descriptions.forEach((element) => {
        if (element.check == true && this.material_parameters.find((t) => t.parameter_id == element.id)) {
          count++
        }
      })
      this.putRightAnswer(count)
    },
  },
  watch: {
    param_descriptions() {},
    material_parameters() {
      this.$store.commit("parameters/SET_SELECTED_PARAMETER_FACE_ID", 0)
      this.active_tab = 0
    },
  },
}
</script>
