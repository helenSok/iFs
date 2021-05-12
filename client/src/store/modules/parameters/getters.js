export default {
  param_descriptions: (state) => {
    return state.param_descriptions
  },
  parameter_description: (state) => {
    return state.parameters.map((t) => t).filter((f) => state.material_parameters.map((e) => e.parameter_id).includes(f.id))
  },
}
