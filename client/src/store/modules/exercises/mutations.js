export default {
  set_exercise_type_id(state, value) {
    state.exercise_type_id = value
  },
  set_user_answers(state, value) {
    // let next = true
    if (value == undefined) {
      state.user_answers = []
      return
    }
    if (state.user_answers.length == 0) {
      state.user_answers.push(value[0])
      return
    }
    value.forEach((user_answer_id) => {
      state.user_answers.forEach((element) => {
        if (element == user_answer_id) {
          state.user_answers.splice(state.user_answers.indexOf(value), 1)
          console.log("Удалил")
          return
        }
      })
      state.user_answers.push(user_answer_id)
    })

    // var set_next = new Promise(() => {

    //   // state.user_answers.forEach((element) => {
    //   //   if (element == value) {
    //   //     state.user_answers.splice(state.user_answers.indexOf(value), 1)
    //   //     console.log("hdhsidfhisf")
    //   //     next = false
    //   //     res(next)
    //   //   }
    //   // })
    // })

    // set_next.then(() => {
    //   console.log("Полоэил")
    //   state.user_answers.push(value)
    //   console.log(state.user_answers)
    // })

    // set_next.then((result) => {
    //   if (result) {
    //     state.user_answers.push(value)
    //     console.log(state.user_answers)
    //   }
    // })
    // state.user_answers.forEach((element) => {
    //   if (element == value) {
    //     state.user_answers.splice(state.user_answers.indexOf(value), 1)
    //     next = false
    //     return
    //   }
    // })
    // if (next) {
    //   state.user_answers.push(value)
    // }
    // console.log(state.user_answers)
  },
  set_disabled_checkbox(state, value) {
    state.disabled_checkbox = value
  },
  set_count_selected_checkbox(state, value) {
    state.count_selected_checkbox = value
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
