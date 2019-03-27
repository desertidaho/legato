<template>
  <div class="home text-center">
    <div class="row">
      <div class="col-12">
        <navbar></navbar>
      </div>
    </div>

    <div class="row mt-0 px-0">
      <div class="col-12 d-flex justify-content-center">
        <carousel></carousel>
      </div>
    </div>

    <div class="container-fluid">

      <div v-if="!searchResults.length">
        <div class="row mt-2">
          <div class="col-12 d-flex justify-content-center">
            <list-artists v-if="!currentUser.artist"></list-artists>
            <list-venues v-else="!currentUser.artist"></list-venues>
          </div>
        </div>
        <hr>
        <div class="row mt-3">
          <div class="col-12 d-flex justify-content-center">
            <list-artists v-if="currentUser.artist"></list-artists>
            <list-venues v-else="currentUser.artist"></list-venues>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-12 d-flex justify-content-center">
          <searchResults></searchResults>
        </div>
        <!-- <div class="col-12 d-flex justify-content-center" v-for="result in searchResults">
          {{result.artistName || result.venueName}}
        </div> -->
      </div>

      <!-- 
      <div class="row mt-3">
        <div class="col-12 d-flex justify-content-center">

        </div>
      </div> -->

    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Navbar from '@/components/Navbar.vue'
  import Carousel from '@/components/Carousel.vue'
  import ListArtists from '@/components/ListArtists.vue'
  import ListVenues from '@/components/ListVenues.vue'
  import SearchResults from '@/components/SearchResults.vue'

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('clearSearch')
    },
    data() {
      return {};
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      },
      artists() {
        return this.$store.state.artists
      },
      venues() {
        return this.$store.state.venues;
      },
      searchResults() {
        return this.$store.state.searchResults;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      }
    },
    components: {
      Navbar,
      Carousel,
      ListArtists,
      ListVenues,
      SearchResults
    }
  };
</script>

<style>
  .container-fluid {
    padding: 0px;
  }

  .home {
    background-color: #e4e4e4;
    overflow-x: hidden;
  }
</style>