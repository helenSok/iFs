import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true,
  state: {
    exercises: [],
    current_exercise: {},
    exercise_setting: {},
    exercise_types: [],
    exercise_type_id: 0,
    selected_exercise_type: null,
    head_elements: [],
    count_selected_checkbox: 0,
    maxAnswer: 0,
    rightAnswer: 0,
    finish: false,
  },
  actions,
  mutations,
  getters,
}
