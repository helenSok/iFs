export default {
  set_parameters(state, parameters) {
    state.parameters = parameters
  },
  setParameters(state, parameters) {
    state.parameters = parameters
  },
  SET_HEAD_ELEMENTS(state, head_elements) {
    state.head_elements = head_elements
  },
  SET_ELEMENT_PARAMS(state, element_params) {
    state.element_params = element_params
  },
  SET_PARAM_DESCRIPTIONS(state, param_descriptions) {
    state.param_descriptions = param_descriptions
  },
  SET_SELECTED_ELEMENT_ID(state, selected_element_id) {
    state.selected_element_id = selected_element_id
  },
  SET_SELECTED_PARAMETER_FACE_ID(state, selected_parameter_face_id) {
    state.selected_parameter_face_id = selected_parameter_face_id
  },
  updateCountAnswer(state, value) {
    state.countAnswer = value
  },
  resetCheckParam(state) {
    state.param_descriptions.forEach((t) => (t.check = false))
  },
  UPDATE_CHECK_PARAM(state, param) {
    let countAnswer = 0

    if (!state.param_descriptions.find((t) => t.id == param.id).check) {
      state.param_descriptions.find((t) => t.id == param.id).check = false
      countAnswer = state.param_descriptions.filter((t) => t.check == true)
      state.countAnswer = countAnswer
      return
    }
    if (state.param_descriptions.find((t) => t.id == param.id).check) {
      state.param_descriptions.filter((t) => t.parameter_id == param.parameter_id).map((o) => (o.check = false))
      state.param_descriptions.find((t) => t.id == param.id).check = true
    }
    countAnswer = state.param_descriptions.filter((t) => t.check == true)
    state.countAnswer = countAnswer.length
  },
  setTabIndex(state, index) {
    state.tab_index = index
  },
}
