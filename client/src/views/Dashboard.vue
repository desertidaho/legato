<template>
  <div class="dashboard text-center">
    <navbar class="navi"></navbar>
    <div class="text-right">
      <button @click="deleteAccount" class="btn btn-danger">
        Delete Account
      </button>
    </div>
    <artist-profile v-if="currentUser.artist"></artist-profile>
    <venue-profile v-else></venue-profile>
    <calendar></calendar>
    <!-- <p>Reviews</p> -->
    <p>(Legato Connections)</p>
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
      },
      deleteAccount() {
        this.$store.dispatch("deleteAccount", this.currentUser)
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

  .delete-btn {
    font-size: 0.7em !important;
    margin: 5px 5px 0 0;
  }
</style>