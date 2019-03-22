<template>
  <div class="dashboard text-center">
    <navbar class="navi"></navbar>
    <artist-profile v-if="currentUser.artist"></artist-profile>
    <venue-profile v-else></venue-profile>
    <calendar></calendar>
    <!-- <p>Reviews</p> -->
    <p>Legato Connections</p>
  </div>
</template>

<script>
  import router from '@/router.js'
  import artistProfile from '@/components/ArtistProfile.vue'
  import venueProfile from '@/components/VenueProfile.vue'
  import Navbar from '@/components/Navbar.vue'
  import Calendar from '@/components/Calendar.vue'

  export default {
    name: "dashboard",
    data() {
      return {

      };
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
      Calendar,
      artistProfile,
      venueProfile
    }
  }; 
</script>


<style>
  .navi {
    padding: 0px
  }
</style>