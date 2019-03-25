<template>
  <div class="listVenues">
    <div class="row mt-2">
      <!-- list of venue cards -->
      <div class="col-12" v-for="venue in venues" :key="venue._id">
        <div class="card mb-3 shadow" data-toggle="modal" data-target="#view-venue-details"
          @click="viewDetails = venue, setViewDetails(venue)">
          <div class="row ">
            <div class="col-5">
              <img :src="venue.image" class="img-fluid">
            </div>
            <div class="col-7 pl-0 d-flex justify-content-left">
              <div class="card-block text-left">
                <p class="venue-header card-text mt-3 mr-2">Venue</p>
                <p class="venue-name card-text mr-2">{{venue.venueName}}</p>
                <p class="venue-body card-text mr-2">{{venue.venueStyle}}</p>
                <p class="venue-body card-text mb-2 mr-2">{{venue.city}}, {{venue.state}}</p>
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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetViewDetails">
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
            <p class="text-left ml-0"> <b>Reviews:</b> </p>
            <div v-for="review in viewDetails.reviewsReceived" :key="review._id">
              <p class="text-left">
                {{review.venueFrom || review.artistFrom}} said: {{review.feedback}}
              </p>
            </div>
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
            <button @click="legato(activeVenue, viewDetails)" data-dismiss="modal"
              class="btn btn-dark shadow">Legato</button>
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
        // viewDetails: {},
        reviewGiven: {
          feedback: '',
          artistTo: '',
          artistFrom: '',
          venueTo: '',
          venueFrom: ''
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
        let activeVenue = this.activeVenue
        let viewDetails = this.viewDetails
        let data = this.reviewGiven
        if (activeVenue.venueName) {
          data.venueFrom = activeVenue.venueName
          data.venueTo = viewDetails.venueName
          this.$store.dispatch('createReviewGivenVenue', { activeVenue, viewDetails, data });
          this.$store.dispatch('createReviewReceivedVenue', { activeVenue, viewDetails, data });
          event.target.reset()
        }
        if (activeArtist.artistName) {
          data.artistFrom = activeArtist.artistName
          data.venueTo = viewDetails.venueName
          this.$store.dispatch('createReviewGivenArtist', { activeArtist, viewDetails, data });
          this.$store.dispatch('createReviewReceivedVenue', { activeArtist, viewDetails, data });
          event.target.reset()
        }
      },
      resetViewDetails() {
        this.$store.dispatch('setArtistViewDetails', {})
      },
      legato(activeVenue, viewDetails) {
        this.$router.push({ name: 'dashboard' })
      }
    },
    components: {}
  };
</script>

<style scoped>
  .card {
    cursor: pointer;
    background-color: white;
    border-radius: 0px;
    border: 2px solid rgb(95, 94, 94);
    border-radius: 8px;
  }

  .img-fluid {
    height: 100%;
    max-height: 20vh;
    min-height: 20vh;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .card-text {
    line-height: 0.8rem;
    font-size: 0.9rem;
  }

  .modal {
    width: 92vw;
    margin: auto;
  }

  li {
    list-style: none;
  }

  .form-control {
    width: 87%;
  }

  .venue-header {
    color: #8307ff;
    font-size: 14px;
    font-weight: bold;
  }

  .venue-name {
    color: black;
    font-size: 22px;
    font-weight: bold;
  }

  .venue-body {
    color: black;
    font-size: 16px;
  }
</style>