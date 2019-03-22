<template>
  <!-- ADD SEARCH ICON, TRANSPARENT BKGD -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <p class="navbar-brand mb-0 pl-2">Legato</p><span v-if="username" class="info text-warning"><i>Hello,
      </i>{{username}}</span><span class="info text-danger" v-else><i>Not logged in!&nbsp</i></span>
    <button class="navbar-toggler pr-2.5" type="button" @click="navToggle" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
        <input id="search-bar" class="form-control mr-sm-2 bg-dark" type="search" placeholder=" Search..."
          aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul class="navbar-nav mr-auto">
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
      }
    },
    components: {},
    filters: {}
  }
</script>

<style>
  #search-bar {
    border-radius: 10px;
  }

  .info {
    text-align: right;
  }

  .point:hover {
    cursor: pointer;
  }
</style>