export default {
  set_exercise_type_id(state, value) {
    state.exercise_type_id = value
  },
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises
  },
  SET_CURRENT_EXERCISE(state, current_exercise) {
    state.current_exercise = current_exercise
  },
  SET_CURRENT_EXERCISE_SETTING(state, exercise_setting) {
    state.exercise_setting = exercise_setting
  },
  SET_HEAD_ELEMENTS(state, head_elements) {
    state.head_elements = head_elements
  },
  SET_EXERCISE_TYPES(state, exercise_types) {
    state.exercise_types = exercise_types
  },
  SET_SELECTED_TYPE(state, selected_type) {
    state.selected_exercise_type = selected_type
  },
  setRightAnswer(state, rightAnswer) {
    state.rightAnswer = rightAnswer
  },
  setMaxAnswer(state, maxAnswer) {
    state.maxAnswer = maxAnswer
  },
  updateFinish(state, value) {
    state.finish = value
  },
}
