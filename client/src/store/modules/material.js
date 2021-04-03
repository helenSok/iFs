import api from "../../service/api"

export default {
  namespaced: true,
  state: {
    photos: [],
  },
  getters: {},
  mutations: {
    SET_PHOTOS(state, photos) {
      state.photos = photos
    },
  },
  actions: {
    async getMaterials({ commit }, material) {
      let response = await api().get("/material/materials", {
        params: {
          materials: material,
        },
      })
      commit("SET_PHOTOS", response.data.data)
    },
  },
  modules: {},
}
