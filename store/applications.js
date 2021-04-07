const application = {
  state: {
    status: '',
    projectPrice: null,
  },
  mutations: {
    APPLICATION_REQUEST(state) {
      state.status = 'loading'
    },
    APPLICATION_SUCCESS(state) {
      state.status = 'success'
    },
    APPLICATION_ERROR(state) {
      state.status = 'error'
    },
    PROJECT_PRICE(state, price) {
      state.projectPrice = price
    },
  },
  actions: {
    CREATEAPPLICATION({ commit }, formData) {
      return new Promise((resolve, reject) => {
        commit('APPLICATION_REQUEST')
        this.$axios
          .post('/api/application/create', formData)
          .then((response) => {
            commit('APPLICATION_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('APPLICATION_ERROR', error)
            reject(error)
          })
      })
    },
    UPDATEAPPLICATION({ commit }, { formData, id }) {
      return new Promise((resolve, reject) => {
        commit('APPLICATION_REQUEST')
        this.$axios
          .post('/api/application/update/' + id, formData)
          .then((response) => {
            commit('APPLICATION_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('APPLICATION_ERROR', error)
            reject(error)
          })
      })
    },

    GETAPPLICATION({ commit }, id) {
      return new Promise((resolve, reject) => {
        commit('APPLICATION_REQUEST')
        this.$axios
          .get('/api/application/view/' + id)
          .then((response) => {
            commit('APPLICATION_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('APPLICATION_ERROR', error)
            reject(error)
          })
      })
    },
    DELETEAPPLICATION({ commit }, id) {
      return new Promise((resolve, reject) => {
        commit('APPLICATION_REQUEST')
        this.$axios
          .post('/api/application/delete/' + id)
          .then((response) => {
            commit('APPLICATION_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('APPLICATION_ERROR', error)
            reject(error)
          })
      })
    },
    GETLISTAPPLICATIONS({ commit }) {
      return new Promise((resolve, reject) => {
        commit('APPLICATION_REQUEST')
        this.$axios
          .get('/api/application/lists')
          .then((response) => {
            commit('APPLICATION_SUCCESS')
            resolve(response)
          })
          .catch((error) => {
            commit('APPLICATION_ERROR', error)
            reject(error)
          })
      })
    },
  },
  getters: {
    applicationsStatus: (state) => state.status,
    projectPrice: (state) => state.projectPrice,
  },
}

export default application
