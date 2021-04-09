// import api from "../../service/api"

import { getAllExercises } from "../../service/api"

export default {
  namespaced: true,
  state: {
    exercises: [],
    tests: "hello",
  },
  getters: {},
  mutations: {
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises
    },
    update_test(state, tests) {
      state.tests = tests
    },
  },
  actions: {
    async getExercises({ commit }) {
      // let response = await api().get("/v1/api/exercises/settings/users/1")
      let response = await getAllExercises(1)

      let exercises = response.data
      // let exercise_types = response.data.included.flatMap(x => x.exercise_types).filter(i => i.type === "exercise_type")
      // exercise_types.forEach(t => t.attributes.id = t.id);
      // exercises.map(v => {
      //   v.attributes.exercise_ids = v.relationships.exercise_types.data.map(t => t.id)
      // })
      commit("SET_EXERCISES", exercises)
      //commit('SET_EXERCISE_TYPES', exercise_types.map(v => v.attributes))
    },
  },
  modules: {},
}
