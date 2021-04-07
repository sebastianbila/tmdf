export const state = () => ({
  token: '',
})

export const mutations = {
  setToken: (state, token) => (state.token = token),
}

export const getters = {
  getToken: (state) => state.token,
}
