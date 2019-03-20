import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 4000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 4000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    activeArtist: {},
    activeVenue: {},
    artists: [],
    venues: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },

    addResource(state, payload) {
      state[payload.resource] = payload.data
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'login' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'dashboard' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'dashboard' })
        })
    },
    logout({ commit, dispatch }, creds) {
      auth.delete('logout', creds)
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },
    //#endregion


    //#region -- UNIVERSAL CREATE METHOD--

    // create new artist or venue
    create({ commit, dispatch }, payload) {
      api.post(payload.endpoint, payload.data)
        .then(res => {
          commit('addResource', {
            resource: payload.resource,
            data: res.data
          })
        })
    },

    //#endregion


    //#region -- ARTIST --

    //get all artists (user on home view)
    getArtists({ commit, dispatch }) {
      api.get('artist')
        .then(res => {
          commit('setArtists', res.data)
        })
    }


    //#endregion



  }
})