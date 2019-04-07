<template>
  <div class="listVenues">
    <div class="row mt-2">
      <!-- list of venue cards -->
      <div class="col-12" v-for="venue in venues" :key="venue._id">
        <div class="card mb-3 shadow mx-2" data-toggle="modal" data-target="#view-venue-details"
          @click="viewDetails = venue, setViewDetails(venue)">
          <div class="row ">
            <div class="col-5">
              <img :src="venue.image" class="img-fluid">
            </div>
            <div class="col-7 pl-0 d-flex justify-content-left">
              <div class="card-block text-left">
                <p class="v-details venue-header card-text mt-3 mr-2 mb-1">Venue</p>
                <p class="v-details venue-name card-text mr-2 mb-2">{{venue.venueName}}</p>
                <p class="v-details venue-body card-text mt-2 mr-2">{{venue.venueStyle}}</p>
                <p class="v-details venue-body card-text mb-2 mr-2">{{venue.city}}, {{venue.state}}</p>
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
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-warning">{{viewDetails.venueName}}</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close"
              @click="resetViewDetails">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button @click="legato(activeVenue, viewDetails)" data-dismiss="modal"
              class="btn btn-warning shadow legato-btn">Connect</button>
            <p class="text-left">
              <b>Venue style:</b>
              {{viewDetails.venueStyle || '(empty)'}}
            </p>
            <p class="text-left">
              <b>Max occupancy:</b>
              {{viewDetails.maxOccupancy || '(empty)'}}
            </p>
            <p class="text-left">
              <b>All ages:</b>
              {{viewDetails.allAges || '(empty)'}}
            </p>
            <p class="text-left">
              <b>City:</b>
              {{viewDetails.city || '(empty)'}}
            </p>
            <p class="text-left">
              <b>State:</b>
              {{viewDetails.state || '(empty)'}}
            </p>
            <p class="text-left">
              <b>Equipment details:</b>
              {{viewDetails.equipmentDetails || '(empty)'}}
            </p>
            <p class="text-left">
              <b>Venue description:</b>
              {{viewDetails.venueDetails || '(empty)'}}
            </p>
            <p class="text-left">
              <b>Contact person:</b>
              {{viewDetails.contact || '(empty)'}}
            </p>
            <p class="text-left">
              <b>Phone:</b>
              {{viewDetails.phone || '(empty)'}}
            </p>
            <p class="text-left ml-0"> <b>Reviews:</b> </p>
            <!-- form for creating reviews -->
            <form class="form-inline" @submit.prevent="createReview">
              <star-rating v-model="reviewGiven.stars" class="mb-2 ml-0"></star-rating>
              <input v-model="reviewGiven.feedback" type="text" class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2" placeholder=" Write a review">
              <button type="submit" class="btn btn-sm btn-success shadow mb-3">Submit</button>
            </form>
            <div v-for="review in viewDetails.reviewsReceived" :key="review._id" class="reviews shadow mb-3">
              <p class="text-left ml-3 mt-2">
                <i> {{review.venueFrom || review.artistFrom}}:</i>
                <span><i v-if="review.stars == 1" class="fas fa-star ml-2"></i></span>
                <span v-if="review.stars == 2"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i></span>
                <span v-if="review.stars == 3"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i></span>
                <span v-if="review.stars == 4"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <span v-if="review.stars == 5"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <br>{{review.feedback}}
              </p>
            </div>
            <div class="mx-2 pb-0">
              <img v-if="viewDetails.imageShowcase != ''" :src="viewDetails.imageShowcase" alt=""
                class="img-fluid img-showcase mb-2 pb-0">
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-around">
            <a :href="viewDetails.twitter" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a :href="viewDetails.facebok" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a :href="viewDetails.instagram" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a :href="viewDetails.linkedIn" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
  import StarRating from 'vue-star-rating'

  export default {
    name: "listVenues",
    props: [],
    data() {
      return {
        reviewGiven: {
          stars: 0,
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
    components: {
      StarRating
    }
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

  .v-details {
    font-size: 0.9rem !important;
  }

  .img-fluid {
    height: 100%;
    max-height: 20vh;
    min-height: 20vh;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 2px;
  }

  .img-showcase {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    object-fit: cover;
  }

  .card-text {
    line-height: 0.8rem;
    font-size: 0.9rem;
  }

  .modal {
    width: 92vw;
    margin: auto;
  }

  .legato-btn {
    float: right;
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
    line-height: 1.2em;
  }

  .venue-body {
    color: black;
    font-size: 16px;
    line-height: .5em;
  }

  .question {
    font-size: 14px;
    color: grey;
  }

  .answer {
    color: black;
    font-size: 20px;
  }

  .fab {
    color: #1ea1f3;
  }

  .fa-star {
    color: #ffd055;
  }
</style>