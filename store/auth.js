const auth = {
  state: {
    status: '',
    token: '',
    user: {},
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS(state, { token, user }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    AUTH_ERROR(state) {
      state.status = 'error'
    },
    LOGOUT(state) {
      state.status = ''
      state.token = ''
      state.user = ''
    },
  },
  actions: {
    FORGOTPASSWORD({ commit }, user) {
      console.log(user)
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        this.$axios
          .post('/api/forgot-password', user)
          .then((response) => {
            console.log(response)
            resolve(response)
          })
          .catch((error) => {
            commit('AUTH_ERROR', error)
            reject(error)
          })
      })
    },
    LOGIN({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        this.$axios
          .post('/api/login', user)
          .then((response) => {
            const token_type = response.data.token.token_type
            const access_token = response.data.token.access_token
            const user = {
              userid: response.data.userid,
              email: response.data.email,
              name: response.data.name,
              role: response.data.role,
            }
            // localStorage.setItem(
            //   'token',
            //   JSON.stringify(token_type + ' ' + access_token)
            // )
            commit(
              'localStorage/setToken',
              JSON.stringify(token_type + ' ' + access_token)
            )
            this.$axios.defaults.headers.common.Authorization = JSON.stringify(
              token_type + ' ' + access_token
            )
            commit('AUTH_SUCCESS', { token: access_token, user })
            resolve(response)
          })
          .catch((error) => {
            commit('AUTH_ERROR', error)

            commit('localStorage/setToken', '')
            // localStorage.removeItem('token')
            reject(error)
          })
      })
    },
    REGISTERATION({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        this.$axios
          .post('/api/register', user)
          .then((response) => {
            const token_type = response.data.token.token_type
            const access_token = response.data.token.access_token
            const user = {
              userid: response.data.userid,
              email: response.data.email,
              name: response.data.name,
              role: response.data.role,
            }
            // localStorage.setItem(
            //   'token',
            //   JSON.stringify(token_type + ' ' + access_token)
            // )
            commit(
              'localStorage/setToken',
              JSON.stringify(token_type + ' ' + access_token)
            )
            this.$axios.defaults.headers.common.Authorization = JSON.stringify(
              token_type + ' ' + access_token
            )
            commit('AUTH_SUCCESS', { token: access_token, user })
            resolve(response)
          })
          .catch((error) => {
            commit('AUTH_ERROR', error)
            // localStorage.removeItem('token')
            commit('localStorage/setToken', '')
            reject(error)
          })
      })
    },
    LOGOUT({ commit }) {
      return new Promise((resolve, reject) => {
        commit('LOGOUT')
        // localStorage.removeItem('token')
        commit('localStorage/setToken', '')
        delete this.$axios.defaults.headers.common.Authorization
        resolve()
      })
    },
    GETUSERINFO({ commit }) {
      commit('AUTH_REQUEST')
      return new Promise((resolve, reject) => {
        this.$axios
          .get('/api/profile')
          .then((response) => {
            commit('AUTH_SUCCESS', {
              token: '',
              user: response.data,
            })
            resolve(response)
          })
          .catch((error) => {
            commit('AUTH_ERROR', error)
            commit('localStorage/setToken', '')
            // localStorage.removeItem('token')
            reject(error)
          })
      })
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    getUserInfo: (state) => state.user,
  },
}

export default auth
