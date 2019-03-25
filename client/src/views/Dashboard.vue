<template>
  <div class="dashboard text-center">
    <navbar class="navi"></navbar>
    <div class="text-right">
    </div>
    <artist-profile v-if="currentUser.artist"></artist-profile>
    <venue-profile v-else></venue-profile>
    <calendar></calendar>
    <a name="comms"></a>
    <communication></communication>
    <a id="comms"></a>
    <button data-toggle="modal" data-target="#modal-delete" class="btn btn-sm btn-danger ml-2 my-2 shadow">
      Delete Account
    </button>
    <!-- <div class="row mt-4 pr-0">
      <div class="col-12 d-flex justify-content-start pr-0">
      </div>
    </div> -->

    <!-- Modal -->
    <div class="modal fade" id="modal-delete" tabindex="-1" role="dialog" aria-labelledby="exampleModal3Label"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModal3Label">DELETE ACCOUNT</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete your profile and account?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
            <button @click="deleteAccount" data-dismiss="modal" type="button" class="btn btn-sm btn-danger ml-3">Delete
              My Account</button>
          </div>
        </div>
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
    mounted() {
      this.moveToComms()
    },
    data() {
      return {
      };
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      },
      viewDetails() {
        return this.$store.state.viewDetails
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      },
      deleteAccount() {
        let user = this.currentUser
        this.$store.dispatch("deleteAccount", user)
      },
      moveToComms() {
        let viewDetails = this.viewDetails
        if (viewDetails.userId) {
          window.location.hash = "comms";
        }
      },
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