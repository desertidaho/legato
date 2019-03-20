<template>
  <div class="container-fluid">
    <div class="home">
      <navbar></navbar>
      <!-- <nav class="bg-secondary text-white mt-2">
        <router-link tag="button" class="btn m-1" to="/home">HOME</router-link>
        <router-link tag="button" class="btn m-1" to="/dashboard">DASHBOARD
        </router-link>
        <button class="btn btn-warning" @click="logOut">Logout</button>
        <form @submit.prevent="">
          <input class="form-control" placeholder="Search..."></input>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </nav> -->
      <h1>Home View</h1>
      <carousel></carousel>
      <p>Calendar</p>
      <p>List of artist names</p>
      <p>List of venue names</p>
      <p>Artist details (if clicked on)</p>
      <p>Venue details (if clicked on)</p>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Navbar from '@/components/Navbar.vue'
  import Carousel from '@/components/Carousel.vue'
  export default {
    name: "home",
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
      Carousel
    }
  };
</script>

<style>
  .container-fluid,
    {
    padding: 0px;
  }
</style>