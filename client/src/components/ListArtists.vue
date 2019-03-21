<template>
  <div class="listArtists">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="artist in artists" :key="artist.id">
        <div
          class="card mb-3 shadow"
          data-toggle="modal"
          data-target="#view-artist-details"
          @click="viewDetails = artist"
        >
          <img class="card-img-top img-fluid" :src="artist.image" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title text-center">ARTIST</h6>
            <h4 class="card-title text-center">{{artist.artistName}}</h4>
            <p class="card-text text-center">{{artist.genre}}</p>
          </div>
        </div>
      </div>

      <!-- modal -->
      <div
        class="modal fade"
        id="view-artist-details"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{viewDetails.artistName}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
              <p class="text-left">
                <b>Reviews:</b>
                {{viewDetails.reviews}}
                <!-- prob need to do a v-for get all reviews -->
              </p>
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
              <button
                @click="legato(activeArtist.userId, viewDetails.userId)"
                class="btn btn-outline-dark shadow d-flex justify-content-center"
              >Legato</button>
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
      viewDetails: {}
    };
  },
  computed: {
    artists() {
      return this.$store.state.artists;
    },
    activeArtist() {
      return this.$store.state.activeArtist;
    }
  },
  methods: {
    // legato(from, to) {}
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
