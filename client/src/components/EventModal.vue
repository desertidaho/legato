<template>
  <div class="modal fade" id="shows" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Events on some date</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="shows.length">
            <!-- iterate of the shows -->
          </div>
          <div v-else>
            <h4>You don't have any events scheduled on this day.</h4>
          </div>
        </div>
        <form>
          <input class="form-control m-1" v-model="newEvent.newEventDesc" placeholder="Event description"></input>
          <input class="form-control m-1" v-model="newEvent.newEventTime" placeholder="Event time"></input>
          <div class="modal-footer ">
            <button type="button" class="btn btn-success" @click="addShow" data-dismiss="modal">Add event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "event-modal",
    props: ['shows'],
    mounted() { },
    data() {
      return {
        newEvent: {
          newEventDesc: "",
          newEventTime: ""
        }
      };
    },
    computed: {
      activeArtist() {
        return this.$store.state.activeArtist
      },
      activeVenue() {
        return this.$store.state.activeVenue
      }
    },
    methods: {
      addShow() {
        let artist = this.activeArtist
        let venue = this.activeVenue
        if (this.$store.state.activeArtist.artistName) {
          let payload = {
            activeArtist: artist,
            data: this.newEvent
          }
          payload.data.artist = artist.artistName;
          this.$store.dispatch("scheduleEventArtist", payload)
        } else {
          let payload = {
            activeVenue: venue,
            data: this.newEvent
          }
          payload.data.venue = venue.venueName;
          this.$store.dispatch("scheduleEventVenue", payload)
        }
      }
    },
    components: {
    }
  }; 
</script>