<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="py-0 px-2  ">
            <div>
              <v-chip-group column mandatory v-model="chip_index">
                <v-icon class="pr-2 black--text">
                  mdi-apps
                </v-icon>
                <div class="pt-1 title black--text font-weight-regular">Упражнения</div>
                <v-spacer />
                <v-chip
                  filter
                  class="ma-1"
                  label
                  outlined
                  v-for="(type, index) in exercise_types"
                  :key="index"
                  @click="get_exercises(type.id)"
                >
                  {{ type.name }}
                </v-chip>
                <v-icon class="black--text mx-2">mdi-settings</v-icon>
              </v-chip-group>
            </div>
          </v-card-text>
          <v-divider />
          <v-simple-table class="mx-0">
            <template v-slot:default>
              <tbody>
                <tr v-for="item in exercises" :key="item.name" @click="start_exercise(item.uri)">
                  <td>
                    {{ item.name }}
                  </td>
                  <td @click.stop class="non-clickable">
                    <v-icon size="20" @click="test()" class="info-icon">
                      mdi-information-variant
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "../router"
import api from "../service/api"

export default {
  name: "exercise-page",
  data() {
    return {
      exercises: [],
      exercise_types: [],
      chip_index: 0,
    }
  },
  created() {},
  components: {},
  watch: {},
  mounted() {
    this.load_data()
  },
  computed: {},
  methods: {
    async get_exercises(exercise_type_id) {
      this.exercises = await api.get_exercises(1, exercise_type_id)
    },
    async get_exercise_types() {
      this.exercise_types = await api.get_exercise_types()
    },
    async load_data() {
      await this.get_exercise_types()
      await this.get_exercises(1, this.exercise_types[this.chip_index].id)
    },
    start_exercise() {
      let exercise_setting_id = 22222222
      router.push({ name: "exercise-first", params: { id: exercise_setting_id } })
      // router.push({ path: uri, params: { exercise_setting_id: exercise_setting_id } })
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-chip .v-icon {
  font-size: 16px !important;
}
::v-deep .res-align {
  text-align: center !important;
}
.setting-icon {
  color: black !important;
}
.info-icon {
  color: black !important;
}
.ex-icon {
  color: white !important;
}
.ex-title {
  color: white;
  font-weight: 400;
}
::v-deep .h-align {
  color: black !important;
  font-weight: 500;
}
.v-card__title {
  background-image: linear-gradient(180deg, #00b09b, #96c93d) !important;
}
.theme--light.v-input {
  background-image: linear-gradient(180deg, #00b09b, #7ea834) !important;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  content: none;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  content: none;
}
::v-deep .theme--light.v-data-table {
  color: black;
}
.v-progress-circular {
  margin: 0.6rem;
}
::v-deep tbody tr {
  cursor: pointer;
}
::v-deep tbody tr td.non-clickable {
  cursor: auto;
  text-align: right;
  min-width: 88px;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  color: white;
}
::v-deep .theme--light.v-label {
  color: rgba(255, 255, 255, 0.9);
}
::v-deep .theme--light.v-icon {
  color: white;
}
</style>
