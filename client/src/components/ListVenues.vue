<template>
  <div class="listVenues">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="venue in venues" :key="venue._id">
        <div class="card mb-3 shadow" data-toggle="modal" data-target="#view-details">
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
    <div class="modal fade" id="view-details" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-left">
              <b>Venue style:</b>
            </p>
            <p class="text-left">
              <b>Max occupancy:</b>
            </p>
            <p class="text-left">
              <b>All ages:</b>
            </p>
            <p class="text-left">
              <b>City:</b>
            </p>
            <p class="text-left">
              <b>State:</b>
            </p>
            <p class="text-left">
              <b>Equipment details:</b>
            </p>
            <p class="text-left">
              <b>Venue description:</b>
            </p>
            <p class="text-left">
              <b>Phone:</b>
            </p>
            <p class="text-left">
              <b>Reviews:</b>
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-around">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            <button class="btn btn-outline-dark shadow">Legato</button>
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
    return {};
  },
  computed: {
    venues() {
      return this.$store.state.venues;
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