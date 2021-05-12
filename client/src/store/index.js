import Vue from "vue"
import Vuex from "vuex"
import exercises from "./modules/exercises"
import parameters from "./modules/parameters"
import materials from "./modules/materials"
import exercise_settings from "./modules/exercise_settings"

// import face_elements from "./modules/face_elements"
// import result from "./modules/result"
import app from "./modules/app"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercises,
    parameters,
    materials,
    exercise_settings,
    // face_elements,
    // result,
    app,
  },
})
