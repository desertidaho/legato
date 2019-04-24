<template>
  <div class="home text-center">
    <div class="row">
      <div class="col-12">
        <navbar></navbar>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <home-carousel></home-carousel>
      </div>
    </div>
    <div class="container-fluid content">
      <div v-if="!searchResults.length">
        <div class="row mt-2">
          <div class="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
            <list-artists v-if="!currentUser.artist"></list-artists>
            <list-venues v-else="!currentUser.artist"></list-venues>
          </div>
        </div>
        <hr>
        <div class="row mt-3">
          <div class="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
            <list-artists v-if="currentUser.artist"></list-artists>
            <list-venues v-else="currentUser.artist"></list-venues>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-12 d-flex justify-content-center">
          <searchResults></searchResults>
        </div>
      </div>
    </div>
    <div class="footer mt-5">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Navbar from '@/components/Navbar.vue'
  import Carousel from '@/components/Carousel.vue'
  import HomeCarousel from '@/components/HomeCarousel.vue'
  import ListArtists from '@/components/ListArtists.vue'
  import ListVenues from '@/components/ListVenues.vue'
  import SearchResults from '@/components/SearchResults.vue'
  import PageFooter from '@/components/PageFooter.vue'

  export default {
    name: "home",
    mounted() { },
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
      HomeCarousel,
      ListArtists,
      ListVenues,
      SearchResults,
      PageFooter
    }
  };
</script>

<style>
  template {
    position: relative;
    min-height: 100%;
  }

  .content {
    padding-bottom: 13rem;
    overflow: auto;
  }

  .home {
    background-color: #e4e4e4;
    overflow-x: hidden;
  }

  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 20vh;
  }
</style>