<template>
  <div class="dashboard text-center">
    <navbar class="navi"></navbar>
    <div class="text-right">
    </div>
    <artist-profile v-if="currentUser.artist"></artist-profile>
    <venue-profile v-else></venue-profile>
    <calendar></calendar>
    <communication></communication>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-start">
        <button @click="deleteAccount" class="btn btn-sm btn-danger ml-2 mb-3 shadow">
          Delete Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import artistProfile from '@/components/ArtistProfile.vue'
  import venueProfile from '@/components/VenueProfile.vue'
  import Navbar from '@/components/Navbar.vue'
  import Calendar from '@/components/Calendar.vue'
  import Communication from '@/components/Communication.vue'

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
        let message = confirm("Are you sure you want to delete user account and profile?");
        if (message == true) {
          let user = this.currentUser
          this.$store.dispatch("deleteAccount", user)
        }
      }
    },
    components: {
      Navbar,
      Calendar,
      artistProfile,
      venueProfile,
      Communication
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