import Vue from "vue"
import Vuex from "vuex"
import exercise from "./modules/exercise/index"
import face_elements from "./modules/face_elements"
import result from "./modules/result"
import material from "./modules/material"
import app from "./modules/app"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercise,
    face_elements,
    result,
    material,
    app,
  },
})
