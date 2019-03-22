<template>
  <div class="listArtists">
    <div class="row mt-2">
      <!-- list of artist cards -->
      <div class="col-12 px-0" v-for="artist in artists" :key="artist.id">
        <div class="card mb-2" data-toggle="modal" data-target="#view-artist-details" @click="viewDetails = artist">
          <div class="row ">
            <div class="col-5">
              <img :src="artist.image" class="w-100 h-100">
            </div>
            <div class="col-7 d-flex justify-content-center">
              <div class="card-block">
                <p class="card-text mt-2 mr-2">ARTIST</p>
                <p class="card-text mr-2">{{artist.artistName}}</p>
                <p class="card-text mb-2 mr-2">{{artist.genre}}</p>
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
              <button @click="legato(activeArtist.userId, viewDetails.userId)"
                class="btn btn-dark shadow d-flex justify-content-center">Legato</button>
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
  .card {
    cursor: pointer;
    background-color: white;
    border-radius: 0px;
  }

  .modal {
    width: 92vw;
    margin: auto;
  }
</style>