import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true,
  state: {
    material: [],
    material_parameters: [], //todo Загружаем параметры материала и сами параметры и производим вычисления
    parameters_possible: [],
    //possible -- возможные параметры
    right_answer: [],
    parameter_material_head: [],
    parameter_material_character: [],
    parameter_material_description: [],
  },
  actions,
  mutations,
  getters,
}
