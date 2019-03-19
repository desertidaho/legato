<template>
  <div class="container-fluid">
    <div class="dashboard">
      <!-- <navbar></navbar> -->
      <nav class="bg-secondary text-white">
        <input class="form-control" placeholder="Search..."></input>
        <router-link tag="button" class="btn m-1" to="/home">HOME</router-link>
        <router-link tag="button" class="btn m-1" to="/dashboard">DASHBOARD
        </router-link>
        <button class="btn btn-warning" @click="logOut">Logout</button>
      </nav>
      <h1>This is the dashboard view.</h1>
      <div class="d-flex justify-content-center row">
        <img class="profile-pic" src="http://placehold.it/150x150">
      </div>
      <p>Profile</p>
      <p>Calendar/History</p>
      <p>Reviews</p>
      <p>Legato Connections</p>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  // import Navbar from '@/components/Navbar.vue'
  export default {
    name: " dashboard",
    data() {
      return {};
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      }
    },
    components: {
      // Navbar 
    }
  }; 
</script>


<style>
  .profile-pic {
    border-radius: 100px;
  }
</style>