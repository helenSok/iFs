<template>
  <div class="d-flex flex-wrap">
    <div class="pr-15" v-for="(element, i) in selected_element_params" :key="i">
      <h2 class="mt-2 pb-0">{{ element.name }}</h2>
      <div v-for="(param, id) in get_param_descriptions(element.id)" :key="id">
        <v-checkbox class="my-0 py-0" color="indigo" v-model="param.check" :label="`${param.name}`" @click="updateCheckParam(param)"> </v-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
  name: "element-param",
  created() {},
  components: {},
  watch: {},
  mounted() {},
  computed: {
    ...mapState("parameters", ["parameters", "selected_element_id", "element_params", "param_descriptions", "countAnswer"]),
    ...mapState("materials", ["material_parameters"]),
    ...mapState("exercises", ["maxAnswer"]),
    parameterDescriptions() {
      let maxAnswer = this.parameters.map((t) => t).filter((f) => this.material_parameters.map((e) => e.parameter_id).includes(f.id)).length
      this.putMaxAnswer(maxAnswer)
      return this.parameters.map((t) => t).filter((f) => this.material_parameters.map((e) => e.parameter_id).includes(f.id))
    },
    elementParameters() {
      return this.parameters.map((t) => t).filter((f) => this.parameterDescriptions.map((e) => e.parameter_id).includes(f.id))
    },
    selected_element_params() {
      const test = this.elementParameters.filter((t) => t.parameter_id == this.$store.state.parameters.selected_parameter_face_id)
      return test
    },
    ...mapGetters("parameters", ["param_descriptions"]),
  },
  methods: {
    ...mapActions("parameters", ["updateCheckParam", "updateCountAnswer"]),
    ...mapActions("exercises", ["putMaxAnswer"]),
    get_param_descriptions(element_param_id) {
      return this.param_descriptions.filter((t) => t.parameter_id == element_param_id)
    },
  },
  destroyed() {
    this.updateCountAnswer(-1)
  },
}
</script>
