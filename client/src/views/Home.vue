<template>
  <div class="home text-center">
    <navbar></navbar>
    <carousel></carousel>
    <div class="home-details m-3">
      <h1>Welcome back, (username).</h1>
      <calendar></calendar>
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
  import Calendar from '@/components/Calendar.vue'
  export default {
    name: "home",
    data() {
      return {};
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      },
      artists() {
        return this.$store.state.artists
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      }
    },
    components: {
      Navbar,
      Carousel,
      Calendar
    }
  };
</script>

<style>
  .container-fluid,
    {
    padding: 0px;
  }
</style>