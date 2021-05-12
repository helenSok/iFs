import api from "../../../service/api"

export default {
  async getExerciseSettings({ commit }) {
    const response = await api.getExerciseSettings()
    const exercise_settings = response.data
    commit("setExerciseSettings", exercise_settings)
  },
}
