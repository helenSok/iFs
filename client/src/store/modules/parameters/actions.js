// import { getAllParameters } from "../../../service/api"
import api from "../../../service/api"

export default {
  async getParameters({ commit }) {
    const response = await api.getParameters()
    commit("setParameters", response.data)
  },
  async get_parameters({ commit }) {
    let response = await api.get_parameters()
    commit("set_parameters", response.data)
  },
  async getHeadElements({ commit }) {
    const response = await api.getAllParameters()
    const head_elements = response.data.filter((t) => t.parameter_id == null)
    const element_params = response.data.map((t) => t).filter((f) => head_elements.map((e) => e.id).includes(f.parameter_id))
    const param_descriptions = response.data.map((t) => t).filter((f) => element_params.map((e) => e.id).includes(f.parameter_id))
    param_descriptions.forEach((t) => (t.check = false))
    commit("SET_HEAD_ELEMENTS", head_elements)
    commit("SET_ELEMENT_PARAMS", element_params)
    commit("SET_PARAM_DESCRIPTIONS", param_descriptions)
  },
  resetTabIndex({ commit }, value) {
    commit("setTabIndex", value)
  },
  putTabIndex({ commit }, query) {
    if (query == null) {
      return
    }
    let tabIndex = 0
    query.el.map((el, index) => {
      if (el.id == query.id) {
        tabIndex = index
      }
    })
    commit("setTabIndex", tabIndex)
  },
  defaultSelectedElementID({ commit }, head_elements) {
    const selected_element_id = head_elements.map((t) => t.id)[0]
    commit("SET_SELECTED_ELEMENT_ID", selected_element_id)
  },
  putSelectedElementID({ commit }, selected_element_id) {
    commit("SET_SELECTED_ELEMENT_ID", selected_element_id)
  },
  updateCheckParam({ commit }, param) {
    // let countAnswer = state.param_descriptions.map((t) => t.check === true)
    commit("UPDATE_CHECK_PARAM", param)
  },
  updateCountAnswer({ commit }, value) {
    commit("updateCountAnswer", value)
  },
  resetChecked({ commit }) {
    commit("resetCheckParam")
  },
}
