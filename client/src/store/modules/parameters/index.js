import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true,
  state: {
    parameters: [],
    head_elements: [],
    tab_index: 0,
    right_answer: [
      {
        id: 1,
        count: 0,
      },
    ],
    countAnswer: -1,
    selected_element_id: 0,
    selected_parameter_face_id: 0,
    element_params: [],
    param_descriptions: [],
  },
  actions,
  mutations,
  getters,
}
