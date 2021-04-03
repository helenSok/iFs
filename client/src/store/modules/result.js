import api from "../../service/api"

export default {
  namespaced: true,
  state: {
    results: [],
    exercise_types: [],
    date_result: "",
    exercise_settings: [],
    getAllResult: false,
  },
  getters: {},
  mutations: {
    SET_RESULTS(state, results) {
      state.results = results
    },
    SET_DATE_RESULT(state, date_result) {
      state.date_result = date_result
    },
    SET_EXERCISE_TYPES(state, exercise_types) {
      state.exercise_types = exercise_types
    },
    SET_EXERCISE_SETTINGS(state, exercise_settings) {
      state.exercise_settings = exercise_settings
    },
  },
  actions: {
    getDateResult({ commit }, date_result) {
      commit("SET_DATE_RESULT", date_result)
    },
    async getResults({ commit }) {
      let response = await api().get("/result/exercises")
      let exercise_settings = response.data.data
      let results = await response.data.included.filter((i) => i.type === "result")
      //await для тестирования
      let exercise_types = response.data.included.filter((i) => i.type === "exercise_type")
      exercise_settings.forEach((t) => (t.attributes.id = t.id))
      exercise_types.forEach((t) => (t.attributes.id = t.id))

      results.forEach((t) => (t.attributes.id = t.id))
      // exercises.map(v => {
      //   v.attributes.exercise_ids = v.relationships.exercise_types.data.map(t => t.id)
      // })

      commit("SET_EXERCISE_SETTINGS", exercise_settings)
      commit("SET_RESULTS", results)
      commit(
        "SET_EXERCISE_TYPES",
        exercise_types.map((v) => v.attributes)
      )
    },
  },
  modules: {},
}
