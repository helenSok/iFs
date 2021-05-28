<template>
  <div class="d-flex flex-wrap">
    <div class="pr-15" v-for="(element, i) in parameter_material_character" :key="i">
      <h2 class="mt-2 pb-0">{{ element.name }}</h2>
      <div v-for="(param, id) in get_parameter_description_by_character_id(element.id)" :key="id">
        <v-checkbox
          class="my-0 py-0 test"
          :class="disabled_checkbox === true ? 'disabled_checkbox' : ''"
          :color="the_end === false ? param.color : red"
          v-model="param.check"
          :label="`${param.name}`"
          @click="set_check(param, element.id)"
        >
        </v-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      the_end: false,
      indigo: "green lighten-1",
      red: "red lighten-1",
    }
  },
  name: "parameter-character",
  props: ["parameter_material_character", "parameter_material_description"],
  created() {},
  components: {},
  watch: {},
  mounted() {},
  computed: {
    ...mapState("exercises", ["disabled_checkbox"]),
  },
  methods: {
    ...mapMutations("exercises", ["set_user_answers"]),
    put_user_answer() {},
    set_check(param, id) {
      let params = []

      this.parameter_material_description
        .filter((t) => t.parameter_id == id && t != param)
        .forEach((element) => {
          if (element.check == true) {
            params.push(element.id)
          }
          element.check = false
        })
      params.push(param.id)
      this.set_user_answers(params)
      //this.$emit("set_check")
      return param
    },
    get_parameter_description_by_character_id(id) {
      return this.parameter_material_description.filter((t) => t.parameter_id == id)
    },
  },
  destroyed() {},
}
</script>

<style lang="scss" scoped>
::v-deep
  .theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)
  .v-icon {
  color: inherit !important;
}

.disabled_checkbox {
  pointer-events: none;
}
</style>
