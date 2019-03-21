<template>
  <div class="listVenues">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="venue in venues" :key="venue._id">
        <div
          class="card mb-3 shadow"
          data-toggle="modal"
          data-target="#view-venue-details"
          @click="viewDetails = venue"
        >
          <img class="card-img-top img-fluid" :src="venue.image" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title text-center">VENUE</h6>
            <h4 class="card-title text-center">{{venue.venueName}}</h4>
            <p class="card-text text-center">{{venue.city}}, {{venue.state}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="view-venue-details" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{viewDetails.venueName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-left">
              <b>Venue style:</b>
              {{viewDetails.venueStyle}}
            </p>
            <p class="text-left">
              <b>Max occupancy:</b>
              {{viewDetails.maxOccupancy}}
            </p>
            <p class="text-left">
              <b>All ages:</b>
              {{viewDetails.allAges}}
            </p>
            <p class="text-left">
              <b>City:</b>
              {{viewDetails.city}}
            </p>
            <p class="text-left">
              <b>State:</b>
              {{viewDetails.state}}
            </p>
            <p class="text-left">
              <b>Equipment details:</b>
              {{viewDetails.equipmentDetails}}
            </p>
            <p class="text-left">
              <b>Venue description:</b>
              {{viewDetails.venueDetails}}
            </p>
            <p class="text-left">
              <b>Phone:</b>
              {{viewDetails.phone}}
            </p>
            <p class="text-left">
              <b>Reviews:</b>
              {{viewDetails.reviews}}
              <!-- will need v-for -->
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-around">
            <a :href="viewDetails.twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a :href="viewDetails.facebok">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a :href="viewDetails.instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a :href="viewDetails.linkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <button
              @click="legato(activeVenue.userId, viewDetails.userId)"
              class="btn btn-outline-dark shadow"
            >Legato</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
export default {
  name: "listVenues",
  props: [],
  data() {
    return {
      viewDetails: {}
    };
  },
  computed: {
    venues() {
      return this.$store.state.venues;
    },
    activeVenue() {
      return this.$store.state.activeVenue;
    }
  },
  methods: {
    viewDetails(venue) {
      // write method to open modal of artist details, line 5 above
    }
  },
  components: {}
};
</script>

<style scoped>
img {
  height: 40vh;
}

.card {
  cursor: pointer;
}
</style>