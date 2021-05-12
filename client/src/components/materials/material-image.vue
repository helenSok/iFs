<template>
  <div>
    <v-img class="mt-2" contain max-height="320" :src="material_uri"></v-img>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "material-image",
  data: () => ({
    material_uri: "",
  }),
  created() {},
  components: {},
  mounted() {
    this.getMaterials(this.material_type_id)
  },
  computed: {
    ...mapState("materials", ["material"]),
    ...mapState("exercises", ["exercise_setting", "current_exercise", "selected_exercise_type"]),
    material_type_id() {
      let settings = {}
      let exercise_setting = this.current_exercise.exercise_settings.find((t) => t.exercise_type_id == this.selected_exercise_type + 1)
      Object.assign(settings, { type_id: exercise_setting.material_type_id })
      Object.assign(settings, { setting_races: exercise_setting.setting_races.map((o) => o.race_id) })
      return settings
    },
  },
  methods: {
    ...mapActions("materials", ["getMaterials", "getParameters"]),
    put_material_uri() {
      this.material_uri = this.material[0].uri
    },
  },
  watch: {
    material() {
      this.put_material_uri()
    },
  },
}
</script>
