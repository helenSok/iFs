<template>
  <div class="d-flex flex-wrap">
    <div class="pr-15" v-for="(element, i) in parameter_material_character" :key="i">
      <h2 class="mt-2 pb-0">{{ element.name }}</h2>
      <div v-for="(param, id) in get_parameter_description_by_character_id(element.id)" :key="id">
        <v-checkbox
          class="my-0 py-0"
          :color="the_end === false ? indigo : red"
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
export default {
  data() {
    return {
      the_end: false,
      indigo: "green lighten-2",
      red: "red lighten-2",
    }
  },
  name: "parameter-character",
  props: ["parameter_material_character", "parameter_material_description"],
  created() {},
  components: {},
  watch: {},
  mounted() {},
  computed: {},
  methods: {
    set_check(param, id) {
      this.parameter_material_description
        .filter((t) => t.parameter_id == id && t != param)
        .forEach((element) => {
          element.check = false
        })
      this.$emit("set_check")
      return param
    },
    get_parameter_description_by_character_id(id) {
      return this.parameter_material_description.filter((t) => t.parameter_id == id)
    },
  },
  destroyed() {},
}
</script>
