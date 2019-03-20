<template>
  <div class="home text-center">
    <navbar></navbar>
    <carousel></carousel>
    <h1 class="m-3">Welcome back, (username).</h1>
    <p>Calendar</p>
    <p>List of artist names</p>
    <p>List of venue names</p>
    <p>Artist details (if clicked on)</p>
    <p>Venue details (if clicked on)</p>
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