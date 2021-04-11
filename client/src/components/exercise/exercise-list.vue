<template>
  <v-row>
    <v-col>
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
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex"
import router from "../../router"

export default {
  name: "exercise-list",
  created() {},
  components: {},
  watch: {},
  mounted() {
    this.getExercises()
  },
  computed: {
    ...mapState("exercise", ["exercises"]),
  },
  methods: {
    ...mapActions("exercise", ["getExercises"]),
    goToTraining(path) {
      router.push(path)
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
