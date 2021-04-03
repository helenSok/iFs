import api from '../../service/api'
export default {
    namespaced: true,
    state: {
      face: [],
      face_param: [],
      face_element: [],
      param_description: []
    },
    getters: {},
    mutations: {
      SET_FACE(state, face) {
        state.face = face
      },
      SET_FACE_ELEMENT(state, face_element) {
        state.face_element = face_element
      },
      SET_FACE_PARAM(state, face_param) {
        state.face_param = face_param
      },
      SET_PARAM_DESCRIPTION(state, param_description) {
        state.param_description = param_description
      }
    },
    actions: {
      async getFace({commit}) { 
        let response = await api().get('/face/faces')
        let faces = response.data.data
        let face_element = response.data.included.filter(i => i.type === "face_element")
        let face_param = response.data.included.filter(i => i.type === "face_param")
        faces.forEach(t => t.attributes.id = t.id);
        face_element.forEach(t => t.attributes.id = t.id);
        face_param.forEach(t => t.attributes.id = t.id);
        face_element.map(t => t.relationships.face_params.data.forEach(t => t.check = false))

        commit('SET_FACE', faces)
        commit('SET_FACE_ELEMENT', face_element)
        commit('SET_FACE_PARAM', face_param)
      }
    },
    modules: {
      
    }
  }