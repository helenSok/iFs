import { getRndMaterial, getMaterialParameters } from "../../../service/api"
import api from "../../../service/api"

export default {
  async getMaterials({ commit, dispatch, rootState }) {
    let setting = {}
    let exercise_setting = rootState.exercises.current_exercise.exercise_settings.find(
      (t) => t.exercise_type_id == rootState.exercises.exercise_type_id
    )
    Object.assign(setting, { type_id: exercise_setting.material_type_id })
    Object.assign(setting, { setting_races: exercise_setting.setting_races.map((o) => o.race_id) })
    let response = await getRndMaterial(setting)
    let material = response.data
    commit("SET_MATERIALS", material)
    await dispatch("getParameters", material[0].id)
  },
  async getParameters({ commit }, material_id) {
    let parameters = await api.get_parameters()
    let response = await getMaterialParameters(material_id)
    let material_parameters = response.data
    commit("SET_MATERIAL_PARAMETERS", material_parameters)
    let right_answer = parameters.data
      .map((t) => t)
      .filter((f) => material_parameters.map((e) => e.parameter_id).includes(f.id))
    let parameter_material_character = parameters.data
      .map((t) => t)
      .filter((f) => right_answer.map((e) => e.parameter_id).includes(f.id))
    let parameter_material_head = parameters.data
      .map((t) => t)
      .filter((f) => parameter_material_character.map((e) => e.parameter_id).includes(f.id))
    parameter_material_head.forEach((t) => (t.active_class = "secondary--text"))
    let parameter_material_description = parameters.data
      .map((t) => t)
      .filter((f) => parameter_material_character.map((e) => e.id).includes(f.parameter_id))
    parameter_material_description.forEach((element) => {
      element.check = false
    })
    commit("set_right_answer", right_answer)
    commit("set_parameter_material_head", parameter_material_head)
    commit("set_parameter_material_character", parameter_material_character)
    commit("set_parameter_material_description", parameter_material_description)
  },
}
