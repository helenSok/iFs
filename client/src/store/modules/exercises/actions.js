import { getAllExercises, getAllExerciseTypes } from "../../../service/api"

export default {
  async getExercises({ commit }, user_id) {
    user_id = 1 //TODO
    let response = await getAllExercises(user_id)
    let exercises = response.data
    commit("SET_EXERCISES", exercises)
  },
  putRightAnswer({ commit }, rightAnswer) {
    commit("setRightAnswer", rightAnswer)
  },
  putMaxAnswer({ commit }, maxAnswer) {
    commit("setMaxAnswer", maxAnswer)
  },
  putCurrentExercise({ commit }, exercise) {
    commit("SET_CURRENT_EXERCISE", exercise)
  },
  putCurrentExerciseSetting({ commit }, exercise_setting) {
    commit("SET_CURRENT_EXERCISE_SETTING", exercise_setting)
  },
  async getExerciseTypes({ state, commit }) {
    const response = await getAllExerciseTypes()
    let exercise_types = response.data
    commit("SET_EXERCISE_TYPES", exercise_types)
    if (state.selected_exercise_type == null) {
      //todo удали меня
      commit("SET_SELECTED_TYPE", exercise_types.indexOf(exercise_types[0]))
    }
    if (state.exercise_type_id == 0) {
      commit("set_exercise_type_id", exercise_types[0].id)
    }
    return exercise_types
  },
  putSelectedExerciseTypeID({ state, commit, dispatch }, type) {
    //todo удали меня
    commit("SET_SELECTED_TYPE", state.exercise_types.indexOf(type))
    dispatch("set_exercise_type_id", type.id)
  },
  set_exercise_type_id({ commit }, id) {
    commit("set_exercise_type_id", id)
  },
  udateFinish({ commit }, value) {
    commit("updateFinish", value)
  },
}
