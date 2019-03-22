<template>
  <div class="listVenues">
    <div class="row mt-2">
      <!-- list of venue cards -->
      <div class="col-12" v-for="venue in venues" :key="venue._id">
        <div class="card mb-3 shadow" data-toggle="modal" data-target="#view-venue-details"
          @click="viewDetails = venue, setViewDetails(venue)">
          <div class="row ">
            <div class="col-5">
              <img :src="venue.image" class="w-100 h-100">
            </div>
            <div class="col-7 d-flex justify-content-center">
              <div class="card-block">
                <p class="card-text mt-2 mr-2">VENUE</p>
                <p class="card-text mr-2">{{venue.venueName}}</p>
                <p class="card-text mb-2 mr-2">{{venue.city}}, {{venue.state}}</p>
              </div>
            </div>
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
              {{viewDetails.reviewsReceived}}
              <!-- will need v-for -->
            </p>
            <!-- form for creating reviews -->
            <form class="form-inline" @submit.prevent="createReview">
              <input v-model="reviewGiven.feedback" type="text" class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2" placeholder=" Write a review">
              <button type="submit" class="btn btn-sm btn-success shadow mb-2">Submit</button>
            </form>

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
            <button @click="legato(activeVenue.userId, viewDetails.userId)" class="btn btn-dark shadow">Legato</button>
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
        viewDetails: {},
        reviewGiven: {
          feedback: ''
        }
      };
    },
    computed: {
      venues() {
        return this.$store.state.venues;
      },
      activeVenue() {
        return this.$store.state.activeVenue;
      },
      activeArtist() {
        return this.$store.state.activeArtist;
      },
      viewDetails() {
        return this.$store.state.viewDetails
      }
    },
    methods: {
      setViewDetails(venue) {
        this.$store.dispatch('setVenueViewDetails', venue)
      },
      createReview() {
        let activeArtist = this.activeArtist
        let viewDetails = this.viewDetails
        let data = this.reviewGiven
        this.$store.dispatch('createReviewGivenVenue', { activeArtist, viewDetails, data });
        this.$store.dispatch('createReviewReceivedArtist', { activeArtist, viewDetails, data });
        event.target.reset()
      }
    },
    components: {}
  };
</script>

<style scoped>
  .card {
    cursor: pointer;
    background-color: rgb(207, 205, 205);
  }

  .modal {
    width: 92vw;
    margin: auto;
  }


  .form-control {
    width: 87%;
  }
</style>