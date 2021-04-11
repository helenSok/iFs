import { getAllExercises } from "../../../service/api"

export default {
  async getExercises({ commit }, user_id) {
    user_id = 1 //TODO
    let response = await getAllExercises(user_id)
    let exercises = response.data
    commit("SET_EXERCISES", exercises)
  },
}
