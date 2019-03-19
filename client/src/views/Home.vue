<template>
  <div class="container-fluid">
    <div class="home">
      <nav class="bg-secondary text-white">
        <router-link tag="button" class="btn m-1" to="/">HOME</router-link>
        <router-link tag="button" class="btn m-1" to="/dashboard">DASHBOARD
        </router-link>
        <button class="btn btn-warning" @click="logOut">Logout</button>
      </nav>
      <h1>This is the home view.</h1>
      <!-- <carousel></carousel> -->
      <ul>
        <li>Calendar</li>
        <li>List of artist names</li>
        <li>List of venue names</li>
        <li>Artist details (if clicked on)</li>
        <li>Venue details (if clicked on)</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  // import Carousel from '@/components/Carousel.vue'
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
    }
    // components: {
    //   Carousel
    // }
  };
</script>

<style>
</style>