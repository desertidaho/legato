<template>
  <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="row">
      <div class="navbar-brand mb-0 pl-2 col-md-1 col nav-link">
        <router-link class="nav-title mr-0 pr-0" to="/home"><img class="logo ml-0" src="@/assets/LogotoHalf.png">
        </router-link>
      </div>
      <div class="col-md-3 col">
        <p v-if="username" class="info text-warning hello">
          <i> {{username}}</i></p><span class="info text-danger" v-else><i>Not logged in!&nbsp</i></span>
        <button class="navbar-toggler pr-2.5 mr-1" type="button" @click="navToggle"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="my-2 my-md-0 d-flex justify-content-center offset-md-6 col-md-4 col">
          <form @submit.prevent="search(query)" class="form-inline searchStyle">
            <div class="p-0">
              <input id="search-bar" autofocus="autofocus" v-model="query"
                class="search-bar form-control mr-sm-1 text-light" type="text" placeholder=" Search..."
                aria-label="Search">
            </div>
            <div class="p-0">
              <button class="btn btn-outline-warning my-2 my-sm-0 ml-2" type="submit"><i
                  class="fas fa-search"></i></button>
            </div>
            <div class="p-0">
              <button @click="clearSearch" type="reset" class="btn btn-outline-danger my-2 ml-2 my-sm-0"><i
                  class="fas fa-times"></i></button>
            </div>
          </form>
        </div>
        <ul class="row navbar-nav mr-auto">
          <!-- INVESTIGATE MARGINS HERE FOR SIDE-SCROLL ISSUE-->
          <li class="col-md-3 nav-item active">
            <a class="nav-link">
              <router-link to="/home" class=" text-light">Home
              </router-link>
            </a>
          </li>
          <li class=" nav-item active">
            <a class="nav-link">
              <router-link to="/dashboard" class=" text-light">
                Dashboard</router-link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">
              <span @click="logOut" to="/" class="point text-warning">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
  import 'bootstrap/dist/js/bootstrap.bundle';
  export default {
    name: 'navbar',
    props: [],
    mounted() {
    },
    data() {
      return {
        count: 0
      }
    },
    computed: {
      username() {
        return this.$store.state.user.userName
      },
      artists() {
        return this.$store.state.artists
      },
      venues() {
        return this.$store.state.venues
      }, searchResults() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      },
      navToggle() {
        this.count++
        if (!(this.count % 2)) {
          $('#navbarSupportedContent').hide()
        } else {
          $('#navbarSupportedContent').show()
        }
      },
      search(query) {
        this.$store.dispatch("clearSearch")
        query = query.toLowerCase()
        let bigArray = []
        let artists = this.artists
        for (let i = 0; i < artists.length; i++) {
          let artist = artists[i]
          for (let property in artist) {
            if (artist.hasOwnProperty(property)) {
              if (artist[property].toString().toLowerCase().includes(query)) {
                if (!bigArray.includes(artist)) {
                  bigArray.push(artist)
                }
              }
            }
          }
        }
        let venues = this.venues
        for (let i = 0; i < venues.length; i++) {
          let venue = venues[i]
          for (let property in venue) {
            if (venue.hasOwnProperty(property)) {
              if (venue[property].toString().toLowerCase().includes(query)) {
                if (!bigArray.includes(venue)) {
                  bigArray.push(venue)
                }
              }
            }
          }
        }

        this.$store.dispatch('search', bigArray)
        this.$router.push({ name: 'home' })
      },
      clearSearch() {
        this.$store.dispatch('clearSearch')
      }
    },
    components: {},
    filters: {}
  }
</script>

<style>
  input.search-bar {
    border-radius: 7px;
    width: 100%;
    background-color: #666d73 !important;
    border: none;
  }

  /* input[type="text"].search-bar:-webkit-input-placeholder {
    color: white;
  } */

  input.search-bar::-webkit-input-placeholder {
    color: white !important;
  }

  .nav-title {
    color: white;
  }

  .info {
    text-align: right;
  }

  .point:hover {
    cursor: pointer;
  }

  .hello {
    margin-left: -2rem;
  }

  .searchStyle {
    width: 90vw;
    margin-right: -17px;
    margin-left: 0px
  }

  .logo {
    margin: -20px;
    height: 60px;
    width: auto;
  }
</style>