<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="py-0 px-2  ">
            <div>
              <v-chip-group column mandatory v-model="get_exercise_type">
                <v-icon class="pr-2 black--text">
                  mdi-apps
                </v-icon>
                <div class="pt-1 title black--text font-weight-regular">Упражнения</div>
                <v-spacer />
                <v-chip filter class="ma-1" label outlined v-for="(type, index) in exercise_types" :key="index" @click="putExerciseTypeID(type)"> {{ type.name }} </v-chip>
                <v-icon class="black--text mx-2">mdi-settings</v-icon>
              </v-chip-group>
            </div>
          </v-card-text>

          <v-divider />
          <v-simple-table class="mx-0">
            <template v-slot:default>
              <tbody>
                <tr v-for="item in exerciseByTypes" :key="item.name" @click="goToTraining(item)">
                  <!-- <td class="pr-0">{{ item.id }}</td> -->
                  <td>
                    <!-- <v-icon size="24" @click="test()" class="info-icon">
                    mdi-clock-alert-outline
                  </v-icon> -->
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
import { mapActions, mapState } from "vuex"
import router from "../../router"

export default {
  name: "exercise-list",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  created() {},
  components: {},
  watch: {},
  mounted() {
    this.getExercises(), this.getExerciseTypes(), this.getExerciseSettings()
  },
  computed: {
    ...mapState("exercises", ["exercises", "exercise_types", "selected_exercise_type"]),
    ...mapState("exercise_settings", ["exercise_settings"]),
    exerciseByTypes() {
      let settingByTypes = this.exercise_settings.filter((t) => t.exercise_type_id === this.selected_exercise_type + 1)
      let exercise_ids = settingByTypes.map((t) => t.exercise_id)
      return this.exercises.map((t) => t).filter((f) => exercise_ids.map((e) => e).includes(f.id)) //todo объект максимально большой
    },
    get_exercise_type: {
      get() {
        return this.selected_exercise_type
      },
      set(value) {
        return value
      },
    },
    setting_visible() {
      if (this.selected_exercise_type == 0) return false
      else return true
    },
  },
  methods: {
    ...mapActions("exercises", ["getExercises", "putCurrentExercise", "putCurrentExerciseSetting", "getExerciseTypes", "putSelectedExerciseTypeID"]),
    ...mapActions("exercise_settings", ["getExerciseSettings"]),
    putExerciseTypeID(type) {
      this.putSelectedExerciseTypeID(type)
    },
    goToTraining(item) {
      this.putCurrentExercise(item)
      this.putCurrentExerciseSetting(item.exercise_settings.find((t) => t.exercise_type_id == this.selected_exercise_type))
      router.push(item.uri)
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
