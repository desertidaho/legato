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
    viewDetails: {},
    artists: [],
    venues: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },

    //sets either activeArtist or activeVenue in state, and pushes object into either artits or venues
    addResource(state, payload) {
      state[payload.resource] = payload.data
      if (payload.resource == 'activeArtist') {
        state.artists.push(payload.data)
      } else {
        state.venues.push(payload.data)
      }
    },

    //push artist objects into artists array in state
    setArtists(state, artists) {
      state.artists = artists
    },

    setActiveProfile(state, payload) {
      state[payload.resource] = payload.data
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          dispatch('createProfile', res.data)
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


    //#region -- UNIVERSAL CREATE, READ, UPDATE METHOD--

    // create new artist or venue
    createProfile({ commit, dispatch }, data) {
      let endpoint
      let resource
      let profile = {}
      if (data.artist) {
        profile.userId = data._id
        profile.artistName = ''
        profile.actSize = 1
        profile.genre = ''
        profile.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw'
        endpoint = 'api/artist'
        resource = 'activeArtist'
      } else {
        profile.userId = data._id
        profile.venueName = ''
        profile.maxOccupancy = 1
        profile.venueStyle = ''
        profile.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw'
        profile.allAges = true
        profile.city = ''
        profile.state = ''
        endpoint = 'api/venue'
        resource = 'activeVenue'
      }
      api.post(endpoint, profile)
        .then(res => {
          commit('addResource', {
            resource: profile.resource,
            data: res.data
          })
        })
    },

    //  (once they have created artist/venue profile) set active artist or venue after login
    getProfile({ commit, dispatch }, payload) {
      api.get(payload.endpoint) //either activeArtist or activeVenue
        .then(res => {
          commit('setActiveProfile', res.data)
        })
    },

    //  (once they have created artist/venue profile) set active artist or venue after login
    editProfile({ commit, dispatch }, payload) {
      api.put(payload.endpoint, payload) //either activeArtist or activeVenue
        .then(res => {
          commit('setActiveProfile', res.data)
        })
    },

    //#endregion


    //#region -- ARTIST --

    //get all artists (for use on home view)
    getArtists({ commit, dispatch }) {
      api.get('artist')
        .then(res => {
          commit('setArtists', res.data)
        })
    },






    //#endregion



  }
})