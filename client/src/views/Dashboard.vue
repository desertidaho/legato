<template>
  <div class="container-fluid">
    <div class="dashboard">
      <navbar></navbar>
      <h1>Dashboard View</h1>
      <div class="d-flex justify-content-center row">
        <img class="profile-pic" src="http://placehold.it/150x150">
      </div>
      <artist-profile></artist-profile>
      <!-- <p>Calendar/History</p>
      <p>Reviews</p> -->
      <p>Legato Connections</p>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import artistProfile from '@/components/ArtistProfile.vue'
  import Navbar from '@/components/Navbar.vue'
  export default {
    name: "dashboard",
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
      Navbar,
      artistProfile
    }
  }; 
</script>


<style>
  .profile-pic {
    border-radius: 100px;
  }
</style>