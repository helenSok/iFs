export default {
  change_drawer_icon({ commit }, drawer_icon) {
    console.log(drawer_icon)
    commit("SET_APP_NAV_ICON", drawer_icon)
  },
}
