<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8" md="9">
        <v-card>
          <v-card-title class="py-3 pl-2">
            <v-icon class="pr-2 ex-icon">
              mdi-apps
            </v-icon>
            <div class="ex-title">Упражнения</div>
          </v-card-title>
          <v-simple-table class="mx-0">
            <template v-slot:default>
              <tbody>
                <tr v-for="item in exercises" :key="item.name" @click="goToTraining('exercise/one')">
                  <td class="pr-0">{{ item.id }}</td>
                  <td class="pl-2">{{ item.name }}</td>
                  <td @click.stop class="non-clickable">
                    <v-icon size="20" class="mr-2 ma-2 setting-icon">
                      mdi-cogs
                    </v-icon>
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
      <v-col md="3" class="pl-0">
        <v-card>
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="computedDateFormatted" label="Выберите дату для просмотра результатов" readonly v-bind="attrs" v-on="on" hide-details class="px-3 pt-6 mt-0 ex-icon" prepend-icon="mdi-calendar-outline" color="white"></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable @input="menu2 = false">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <v-data-table :headers="headers" :items="results.filter((t) => t.attributes.date_result.substring(0, 10) === this.date)" class="elevation-1" hide-default-footer>
            <template v-slot:no-data>
              <div>Нет данных</div>
            </template>
            <template v-slot:item.time_result="{ item }">
              <td>
                {{ getTime(item.attributes.date_result) }}
              </td>
            </template>
            <template v-slot:item.exercise="{ item }">
              <td class="res-align">
                {{ getNumberExercise(item.relationships.exercise_settings.data.id) }}
              </td>
            </template>
            <template v-slot:item.actions="{ item }">
              <td>
                {{ getType(item.relationships.exercise_settings.data.id) }}
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!--
<v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

    <v-card 
      v-for="exercise in exercises" 
      :key="exercise.name" 
      class="elevation-12 mt-2"
    >
      <v-toolbar 
        height="56" 
        color="primary" 
        dark
        flat
      >
        <v-toolbar-title>
          {{ exercise.title }}
        </v-toolbar-title>
        
        <v-spacer/>
        <v-icon 
          class="pr-1"
        >
          mdi-settings
        </v-icon>
        <v-icon>
          mdi-information
        </v-icon>
      </v-toolbar>

      <v-card-text>
        {{ exercise.name }}
      </v-card-text>
      <v-card-actions 
        class="pt-0 pl-4" 
      >
        <v-btn 
          v-for="exercise_id in exercise.exercise_ids" 
          :key="exercise_id" 
          type="submit" 
          class="elevation-2" 
          color="primary" 
          outlined 
          @click="goToTraining(exercise.exerciseUrl)"
        >
          {{ getExerciseType(exercise_id)}}
        </v-btn>
        <v-card-text v-if="exercise.id != 1" class="py-2">Дата последнего контроля:  года</v-card-text> 
      </v-card-actions>
    </v-card>
  --></div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex"
import router from "../../router"

export default {
  name: "ExerciseCard",
  data: () => ({
    headers: [
      { text: "Упр", align: "center", sortable: false, value: "exercise", class: "h-align" },
      { text: "Вид", value: "actions", sortable: false, align: "center", class: "h-align" },
      { text: "Балл", sortable: false, align: "center", value: "attributes.current_ball", class: "h-align" },
      { text: "Время", align: "center", sortable: false, value: "time_result", class: "h-align" },
    ],
    desserts: [],
    date1: new Date().toISOString().substring(11, 16),
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menu2: false,
  }),
  created() {},
  beforeDestroy() {
    clearInterval(this.interval)
  },
  components: {},
  watch: {
    date(val) {
      this.getDateResult(val)
    },
  },
  mounted() {
    this.getExercises()
    // this.getDateResult(this.date), this.getResults()
  },
  computed: {
    ...mapState("exercise", ["exercises"]),
    ...mapState("result", ["results", "exercise_types", "exercise_settings"]),

    testss: {
      get() {
        return this.$store.state.exercise.tests
      },
      set(value) {
        this.update_test(value)
      },
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  methods: {
    ...mapMutations("exercise", ["update_test"]),
    getTime(time) {
      return time.substring(11, 16)
    },
    getNumberExercise(ex_id) {
      let settings = this.exercise_settings.find((t) => t.id == ex_id)
      return settings.attributes.id_exercise
    },
    getType(ex_id) {
      let settings = this.exercise_settings.find((t) => t.id == ex_id)
      let type_id = settings.relationships.exercise_types.data.id
      let type = this.exercise_types.find((t) => t.id == type_id)
      return type.short_name
    },
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split("-")
      return `${day}.${month}.${year}`
    },
    ...mapActions("result", ["getResults", "getDateResult"]),
    ...mapActions("exercise", ["getExercises"]),

    test() {
      return 1
    },
    goToTraining(path) {
      router.push(path)
    },
    getExerciseType(exercise_id) {
      return this.exercise_types.find((t) => t.id == exercise_id).name
    },
  },
}
</script>

<style lang="scss" scoped>
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
