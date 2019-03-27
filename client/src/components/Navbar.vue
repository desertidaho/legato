<template>
  <!-- ADD SEARCH ICON, TRANSPARENT BKGD -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <p class="navbar-brand mb-0 pl-2 nav-link">
      <router-link class="nav-title" to="/home"><img class="logo" src="@/assets/LogotoHalf.png"></router-link>
    </p><span v-if="username" class="info text-warning"><i>Hello,
      </i>{{username}}</span><span class="info text-danger" v-else><i>Not logged in!&nbsp</i></span>
    <button class="navbar-toggler pr-2.5" type="button" @click="navToggle" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="row my-2 my-lg-0 d-flex justify-content-center">
        <form @submit.prevent="search(query)" class="form-inline searchStyle">
          <div class="col-10 p-0">
            <input id="search-bar" autofocus="autofocus" v-model="query" class="form-control mr-sm-1 bg-dark"
              type="search" placeholder=" Search..." aria-label="Search">
          </div>
          <div class="col-1 p-0">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
          </div>
        </form>
        <div class="col-1 p-0 mr-1">
          <button @click="clearSearch" class="btn btn-outline-light my-2 my-sm-0"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <ul class="navbar-nav mr-auto">
        <!-- INVESTIGATE MARGINS HERE FOR SIDE-SCROLL ISSUE-->
        <li class="nav-item active">
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
  </nav>
</template>


<script>
  import 'bootstrap/dist/js/bootstrap.bundle';
  export default {
    name: 'navbar',
    props: [],
    mounted() {
      this.$store.dispatch('clearSearch')
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
        query = query.toLowerCase()
        let bigArray = []
        let artists = this.artists
        for (let i = 0; i < artists.length; i++) {
          let artist = artists[i]
          for (let property in artist) {
            if (artist.hasOwnProperty(property)) {
              if (artist[property].toString().toLowerCase() == query) {
                bigArray.push(artist)
              }
            }
          }
        }
        let venues = this.venues
        for (let i = 0; i < venues.length; i++) {
          let venue = venues[i]
          for (let property in venue) {
            if (venue.hasOwnProperty(property)) {
              if (venue[property].toString().toLowerCase() == query) {
                bigArray.push(venue)
              }
            }
          }
        }

        this.$store.dispatch('search', bigArray)
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
  #search-bar {
    border-radius: 10px;
    color: white;
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