<template>
  <div class="listArtists">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="artist in artists" :key="artist._id">
        <div class="card mb-3 shadow" @click="viewDetails(artist)">
          <img class="card-img-top img-fluid" :src="artist.image" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title text-center">ARTIST</h6>
            <h4 class="card-title text-center">{{artist.artistName}}</h4>
            <p class="card-text text-center">{{artist.genre}}</p>
          </div>
        </div>
      </div>
    </div>
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
