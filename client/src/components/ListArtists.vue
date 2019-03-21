<template>
  <div class="listArtists">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="artist in artists" :key="artist">
        <div class="card mb-3 shadow" data-toggle="modal" data-target="#view-details">
          <img class="card-img-top img-fluid" :src="artist.image" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title text-center">ARTIST</h6>
            <h4 class="card-title text-center">{{artist.artistName}}</h4>
            <p class="card-text text-center">{{artist.genre}}</p>
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
              <b>Genre:</b>
            </p>
            <p class="text-left">
              <b>Style:</b>
            </p>
            <p class="text-left">
              <b>Number in group:</b>
            </p>
            <p class="text-left">
              <b>Homebase:</b>
            </p>
            <p class="text-left">
              <b>Equipment details:</b>
            </p>
            <p class="text-left">
              <b>Performance needs:</b>
            </p>
            <p class="text-left">
              <b>Phone:</b>
            </p>
            <p class="text-left">
              <b>Reviews:</b>
            </p>
          </div>
          <div class="modal-footer">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            <button class="btn btn-outline-dark shadow d-flex justify-content-center">Legato</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
export default {
  name: "listArtists",
  props: [],
  data() {
    return {};
  },
  computed: {
    artists() {
      return this.$store.state.artists;
    }
  },
  methods: {
    viewDetails(artist) {
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
