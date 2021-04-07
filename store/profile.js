const profile = {
  state: {
    status: '',
  },
  mutations: {
    PROFILE_REQUEST(state) {
      state.status = 'loading'
    },
    PROFILE_SUCCESS(state) {
      state.status = 'success'
    },
    PROFILE_ERROR(state) {
      state.status = 'error'
    },
  },
  actions: {
    CREATEPROFILE({ commit }, profile) {
      return new Promise((resolve, reject) => {
        commit('PROFILE_REQUEST')
        this.$axios
          .post('/api/profile/update', profile)
          .then((response) => {
            commit('PROFILE_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('PROFILE_ERROR', error)
            reject(error)
          })
      })
    },
    GETROFILE({ commit }) {
      return new Promise((resolve, reject) => {
        commit('PROFILE_REQUEST')
        this.$axios
          .get('/api/profile')
          .then((response) => {
            commit('PROFILE_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('PROFILE_ERROR', error)
            reject(error)
          })
      })
    },
  },
  getters: {
    profileStatus: (state) => state.status,
  },
}

export default profile
