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
      <form @submit.prevent="search" class="form-inline my-2 my-lg-0 d-flex justify-content-center">
        <input id="search-bar" v-model="query" class="form-control mr-sm-2 bg-dark" type="search"
          placeholder=" Search..." aria-label="Search"><button class="btn btn-light my-2 my-sm-0" type="submit"><i
            class="fas fa-search"></i></button>
      </form>
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
      filteredArtists(query) {
        query = query.toLowerCase()
        return this.$store.state.artists.filter(a => a.artistName.toLowerCase() == query)
      },
      filteredVenues(query) {
        query = query.toLowerCase()
        return this.$store.state.venues.filter(v => v.venueName.toLowerCase() == query)
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
        let filteredArtists = this.$store.state.artists.filter(a => a.artistName.toLowerCase() == query)
        let filteredVenues = this.$store.state.venues.filter(a => a.venueName.toLowerCase() == query)
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

  .logo {
    margin: -20px;
    height: 60px;
    width: auto;
  }
</style>