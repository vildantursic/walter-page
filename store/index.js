import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
    state: {
      posts: [],
      cases: [],
      jobs: [],
      academy: [],
      scholarships: []
    },
    mutations: {
      SET_POSTS(state, payload) {
        state.posts = payload
      },
      SET_CASES(state, payload) {
        state.cases = payload
      },
      SET_JOBS(state, payload) {
        state.jobs = payload
      },
      SET_ACADEMY(state, payload) {
        state.academy = payload
      },
      SET_SCHOLARSHIPS(state, payload) {
        state.scholarships = payload
      }
    }
  })
}

export default createStore
