<template>
  <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="row">
      <div class="navbar-brand mb-0 pl-2 ml-3 col col-md-1 nav-link">
        <router-link class="nav-title mr-0 pr-0" to="/home"><img class="logo ml-0 mt-2" src="@/assets/LogotoHalf.png">
        </router-link>
      </div>
      <div class="col col-md-2 d-flex justify-content-center mt-4">
        <p v-if="activeVenue.venueName" class="info text-warning hello mt-2">
          <i> {{activeVenue.venueName}}</i></p>
        <p v-else="activeArtist.artistName" class="info text-warning hello mt-2">
          <i>{{activeArtist.artistName}}</i></p>
        <span class="info text-danger" v-else><i>Not logged in!&nbsp</i></span>
        <button class="navbar-toggler ml-5" type="button" @click="navToggle" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-12 ml-2 col-md-6 collapse navbar-collapse search" id="navbarSupportedContent">
        <div class="my-3 d-flex justify-content-center">
          <form @submit.prevent="search(query)" class="form-inline searchStyle">
            <input id="search-bar" autofocus="autofocus" v-model="query"
              class="search-bar form-control mr-sm-1 text-light" type="text" placeholder=" Search..."
              aria-label="Search">
            <button class="btn btn-outline-warning search-btn ml-2 ml-md-4 mt-md-3" type="submit"><i
                class="fas fa-search"></i></button>
            <button @click="clearSearch" type="reset" class="btn btn-outline-danger ml-2 mt-md-3"><i
                class="fas fa-times"></i></button>
          </form>
        </div>
        <div class="nav-selections d-flex justify-content-end">
          <p class="nav-item active">
            <a class="nav-link">
              <router-link to="/home" class=" text-light">Home
              </router-link>
            </a>
          </p>
          <p class=" nav-item active">
            <a class="nav-link">
              <router-link to="/dashboard" class=" text-light">
                Dashboard</router-link>
            </a>
          </p>
          <p class="nav-item active">
            <a class="nav-link">
              <span @click="logOut" to="/" class="point text-warning">Logout</span>
            </a>
          </p>
        </div>
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
      },
      activeArtist() {
        return this.$store.state.activeArtist
      },
      activeVenue() {
        return this.$store.state.activeVenue
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

  .nav-selections {
    margin-left: -5vw;
  }

  .logo {
    margin: -20px;
    height: 60px;
    width: auto;
  }

  #search-bar {
    margin-left: -9vw;
    width: 63vw;
  }

  @media only screen and (max-width: 768px) {
    #search-bar {
      width: 50vw;
    }
  }
</style>