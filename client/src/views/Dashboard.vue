<template>
  <div class="dashboard text-center">
    <div class="row">
      <div class="col-12">
        <navbar class="navi"></navbar>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12"> -->
    <artist-profile v-if="currentUser.artist"></artist-profile>
    <venue-profile v-else></venue-profile>
    <!-- </div>
    </div> -->
    <div class="row">
      <div class="col-12">
        <calendar></calendar>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a id="comms"></a>
        <communication></communication>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button data-toggle="modal" data-target="#modal-delete" class="btn btn-xl btn-danger shadow delbutmarg">
          Delete Account
        </button>
      </div>
    </div>
    <div class="footer mt-5">
      <page-footer></page-footer>
    </div>

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
  import PageFooter from '@/components/PageFooter.vue'

  export default {
    name: "dashboard",
    mounted() {
      this.$store.dispatch("clearSearch")
      this.moveToComms()
      this.$store.state.activeArtist
      this.$store.state.activeVenue
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
      Communication,
      PageFooter
    }
  }; 
</script>


<style>
  template {
    position: relative;
    overflow-x: hidden !important;
    min-height: 100%;
  }

  .navi {
    padding: 0px
  }

  .delete-btn {
    font-size: 0.7em !important;
    margin: 5px 5px 0 0;
  }

  .delbutmarg {
    margin-bottom: 45px !important;
  }

  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 20vh;
  }
</style>