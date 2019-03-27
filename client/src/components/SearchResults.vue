<template>
  <div class="searchResults">
    <div class="row mt-2">
      <!-- list of venue cards -->
      <div class="col-12" v-for="result in searchResults" :key="result._id">
        <div class="card mx-3 my-2 shadow" data-toggle="modal" data-target="#view-result-details"
          @click="resultDetails = result, setViewDetails(result)">
          <div class="row">
            <div class="col-5">
              <img :src="result.image" class="img-fluid">
            </div>
            <div class="col-7 pl-0 d-flex justify-content-left">
              <div class="card-block text-left">
                <p class="result-header card-text mt-3 mr-2" v-if="result.venueName"><img src="../assets/logo.png"
                    style="height: 1em">enue</p>
                <p class="result-header card-text mt-3 mr-3" v-else>Artist</p>
                <p class="result-name card-text mr-2">{{result.venueName || result.artistName}}</p>
                <p class="result-body card-text mr-2">{{result.venueStyle || result.genre}}</p>
                <p class="venue-body card-text mb-2 mr-2">{{result.homeBase || result.city + ", " + result.state}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="view-result-details" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{viewDetails.venueName || viewDetails.artistName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetViewDetails">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-if="viewDetails.venueName">
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
                <b>Contact person:</b>
                {{viewDetails.phone}}
              </p>
              <p class="text-left">
                <b>Phone:</b>
                {{viewDetails.phone}}
              </p>
              <p class="text-left ml-0"> <b>Reviews:</b> </p>
              <div v-for="review in viewDetails.reviewsReceived">
                <p class="text-left">
                  {{review.venueFrom || review.artistFrom}} said: {{review.feedback}}
                </p>
              </div>
              <!-- form for creating reviews-->
              <form class="form-inline" @submit.prevent="createReviewV">
                <input v-model="reviewGivenV.feedback" type="text" class="form-control mb-2 mr-sm-2"
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
              <button @click="legatoV(activeVenue, viewDetails)" data-dismiss="modal"
                class="btn btn-dark shadow">Connect</button>
            </div>
          </div>
          <div v-else>
            <div class="modal-body">
              <p class="text-left">
                <b>Genre:</b>
                {{viewDetails.genre || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Style:</b>
                {{viewDetails.styleMusic || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Number in group:</b>
                {{viewDetails.actSize || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Homebase:</b>
                {{viewDetails.homeBase || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Equipment details:</b>
                {{viewDetails.equipmentDetails || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Performance needs:</b>
                {{viewDetails.performanceNeeds || '(empty)'}}
              </p>
              <p class="text-left">
                <b>Phone:</b>
                {{viewDetails.phone || '(empty)'}}
              </p>
              <p class="text-left ml-0"> <b>Reviews:</b> </p>
              <div v-for="review in viewDetails.reviewsReceived">
                <p class="text-left">
                  {{review.artistFrom || review.venueFrom}} said: {{review.feedback}}
                </p>
              </div>
              <!-- form for creating reviews -->
              <form class="form-inline" @submit.prevent="createReviewA">
                <input v-model="reviewGivenA.feedback" type="text" class="form-control mb-2 mr-sm-2"
                  id="inlineFormInputName2" placeholder=" Write a review">
                <button type="submit" class="btn btn-sm btn-success shadow mb-2">Submit</button>
              </form>
            </div>
            <div class="modal-footer d-flex justify-content-around">
              <a :href="viewDetails.twitter" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a :href="viewDetails.facebook" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a :href="viewDetails.instagram" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a :href="viewDetails.linkedIn" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <button @click="legatoA(activeArtist, viewDetails)" data-dismiss="modal"
                class="btn btn-dark shadow d-flex justify-content-center">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
  export default {
    name: 'search-results',
    props: [],
    mounted() {
    },
    data() {
      return {
        //resultDetails: {}
        reviewGivenA: {
          feedback: '',
          artistTo: '',
          artistFrom: '',
          venueTo: '',
          venueFrom: ''
        },
        reviewGivenV: {
          feedback: '',
          artistTo: '',
          artistFrom: '',
          venueTo: '',
          venueFrom: ''
        }
      }
    },
    computed: {
      searchResults() {
        return this.$store.state.searchResults
      },
      activeArtist() {
        return this.$store.state.activeArtist;
      },
      activeVenue() {
        return this.$store.state.activeVenue;
      },
      viewDetails() {
        return this.$store.state.viewDetails
      }
    },
    methods: {
      createReviewV() {
        let activeArtist = this.activeArtist
        let activeVenue = this.activeVenue
        let viewDetails = this.viewDetails
        let data = this.reviewGivenV
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
      createReviewA() {
        let activeArtist = this.activeArtist
        let activeVenue = this.activeVenue
        let viewDetails = this.viewDetails
        let data = this.reviewGivenA
        if (activeArtist.artistName) {
          data.artistFrom = activeArtist.artistName
          data.artistTo = viewDetails.artistName
          this.$store.dispatch('createReviewGivenArtist', { activeArtist, viewDetails, data });
          this.$store.dispatch('createReviewReceivedArtist', { activeArtist, viewDetails, data });
          event.target.reset()
        }
        if (activeVenue.venueName) {
          data.venueFrom = activeVenue.venueName
          data.artistTo = viewDetails.artistName
          this.$store.dispatch('createReviewGivenVenue', { activeVenue, viewDetails, data });
          this.$store.dispatch('createReviewReceivedArtist', { activeArtist, viewDetails, data });
          event.target.reset()
        }
      },
      setViewDetails(result) {
        if (result.artistName) {
          this.$store.dispatch('setArtistViewDetails', result)
        } else {
          this.$store.dispatch('setVenueViewDetails', result)
        }
      },
      resetViewDetails() {
        this.$store.dispatch('setArtistViewDetails', {})
        this.$store.dispatch('setVenueViewDetails', {})
      },
      legatoA(activeArtist, viewDetails) {
        this.$router.push({ name: 'dashboard' })
      },
      legatoV(activeVenue, viewDetails) {
        this.$router.push({ name: 'dashboard' })
      }
    },
    components: {},
    filters: {}
  }
</script>

<style>
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

  .result-header {
    color: #8307ff;
    font-size: 14px;
    font-weight: bold;
  }

  .result-name {
    color: black;
    font-size: 22px;
    font-weight: bold;
  }

  .result-body {
    color: black;
    font-size: 16px;
  }
</style>