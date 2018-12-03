import * as fb from 'firebase'
// import * as fb from 'firebase/app'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      // fb.auth().createUserWithEmailAndPassword(email, password)
      //   .then(user => {
      //     // commit('setUser', new User(user.uid))
      //     commit('setUser', new User(user.user.uid))
      //     commit('setLoading', false)
      //   })
      //   .catch(error => {
      //     commit('setLoading', false)
      //     commit('setError', error.message)
      //   })
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
