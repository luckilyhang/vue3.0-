
import apis from '~/api/apis';
const state = () => ({
  isShow: false, //是否出现重新登陆提示
})
const getters = {
  appLoginAgain(state) {
    return state.appLoginAgain;
  }
}
const mutations = {
  appLoginAgain(state, bool = false) {
    state.appLoginAgain = bool;
  }
}
const actions = {
  //请求是否其他地方登陆
  async appLoginAgain({ commit }, params = {}) {
    const res = await apis.appApi.appLoginAgain(params);
    if (res.Code === 430) {
      commit('appLoginAgain', true)
    }
    return res;
  }


}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
