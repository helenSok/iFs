export default {
  SET_MATERIALS(state, material) {
    state.material = material
  },
  SET_MATERIAL_PARAMETERS(state, material_parameters) {
    state.material_parameters = material_parameters
  },

  set_parameter_material_head(state, value) {
    state.parameter_material_head = value
  },
  set_parameter_material_character(state, value) {
    state.parameter_material_character = value
  },
  set_parameter_material_description(state, value) {
    state.parameter_material_description = value
  },
  set_right_answer(state, value) {
    state.right_answer = value
  },
}
