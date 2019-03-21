<template>
  <div class="listVenues">
    <div class="row mt-2">
      <div class="col-10 offset-1" v-for="venue in venues" :key="venue._id">
        <div class="card mb-3 shadow" @click="viewDetails(venue)">
          <img class="card-img-top img-fluid" :src="venue.image" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title text-center">VENUE</h6>
            <h4 class="card-title text-center">{{venue.venueName}}</h4>
            <p class="card-text text-center">{{venue.city}}, {{venue.state}}</p>
          </div>
        </div>
      </div>
    </div>
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
    viewDetails(venues) {
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