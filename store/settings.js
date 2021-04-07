const settings = {
  state: {
    status: '',
    projectPrice: null,
  },
  mutations: {
    SETTINGS_REQUEST(state) {
      state.status = 'loading'
    },
    SETTINGS_SUCCESS(state) {
      state.status = 'success'
    },
    SETTINGS_ERROR(state) {
      state.status = 'error'
    },
  },
  actions: {
    UPDATEACCOUNT({ commit }, formData) {
      return new Promise((resolve, reject) => {
        commit('SETTINGS_REQUEST')
        this.$axios
          .post('/api/profile/account/update', formData)
          .then((response) => {
            commit('SETTINGS_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('SETTINGS_ERROR', error)
            reject(error)
          })
      })
    },
    DEACTIVATEACCOUNT({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SETTINGS_REQUEST')
        this.$axios
          .post('/api/profile/delete')
          .then((response) => {
            commit('SETTINGS_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('SETTINGS_ERROR', error)
            reject(error)
          })
      })
    },
    PASSWORDCHANGE({ commit }, formData) {
      return new Promise((resolve, reject) => {
        commit('SETTINGS_REQUEST')
        this.$axios
          .post('/api/profile/password/update', formData)
          .then((response) => {
            commit('SETTINGS_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('SETTINGS_ERROR', error)
            reject(error)
          })
      })
    },
  },
  getters: {
    settingsStatus: (state) => state.status,
  },
}

export default settings
