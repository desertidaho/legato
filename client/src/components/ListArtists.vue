<template>
  <div class="listArtists">
    <div class="row mt-2">
      <!-- list of artist cards -->
      <div class="col-12" v-for="artist in artists" :key="artist.id">
        <div class="card mb-3 shadow" data-toggle="modal" data-target="#view-artist-details"
          @click="viewDetails = artist, setViewDetails(artist)">
          <div class="row ">
            <div class="col-5">
              <img :src="artist.image" class="img-fluid">
            </div>
            <div class="col-7 pl-0 d-flex justify-content-left">
              <div class="card-block text-left">
                <p class="artist-header card-text mt-3 mr-2">Artist</p>
                <p class="artist-name card-text mr-2">{{artist.artistName}}</p>
                <p class="artist-body card-text mr-2">{{artist.genre}}</p>
                <p class="artist-body card-text mr-2">{{artist.homeBase}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div class="modal fade" id="view-artist-details" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{viewDetails.artistName}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetViewDetails">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-left">
                <b>Genre:</b>
                {{viewDetails.genre}}
              </p>
              <p class="text-left">
                <b>Style:</b>
                {{viewDetails.styleMusic}}
              </p>
              <p class="text-left">
                <b>Number in group:</b>
                {{viewDetails.actSize}}
              </p>
              <p class="text-left">
                <b>Homebase:</b>
                {{viewDetails.homeBase}}
              </p>
              <p class="text-left">
                <b>Equipment details:</b>
                {{viewDetails.equipmentDetails}}
              </p>
              <p class="text-left">
                <b>Performance needs:</b>
                {{viewDetails.performanceNeeds}}
              </p>
              <p class="text-left">
                <b>Phone:</b>
                {{viewDetails.phone}}
              </p>
              <p class="text-left ml-0"> <b>Reviews:</b> </p>
              <div v-for="review in viewDetails.reviewsReceived" :key="review._id">
                <p class="text-left">
                  {{review.artistFrom || review.venueFrom}} said: {{review.feedback}}
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
              <button @click="legato(activeArtist, viewDetails)" data-dismiss="modal"
                class="btn btn-dark shadow d-flex justify-content-center">Connect</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end modal -->
    </div>
  </div>
</template>

<script>

  export default {
    name: "listArtists",
    props: [],
    data() {
      return {
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
      artists() {
        return this.$store.state.artists;
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
      setViewDetails(artist) {
        this.$store.dispatch('setArtistViewDetails', artist)
      },
      createReview() {
        let activeArtist = this.activeArtist
        let activeVenue = this.activeVenue
        let viewDetails = this.viewDetails
        let data = this.reviewGiven
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
      resetViewDetails() {
        this.$store.dispatch('setArtistViewDetails', {})
      },
      legato(activeArtist, viewDetails) {
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

  .artist-header {
    color: #daa917;
    font-size: 14px;
    font-weight: bold;
  }

  .artist-name {
    color: black;
    font-size: 22px;
    font-weight: bold;
  }

  .artist-body {
    color: black;
    font-size: 16px;
  }

  .fab {
    color: rgb(72, 72, 194);
  }
</style>