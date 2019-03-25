<template>
  <div class="modal fade select" id="shows" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{date | formatTime}}</h5>
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
          <<<<<<< HEAD <div class="modal-footer ">
            <button type="button" class="btn btn-success" @click="addShow" data-dismiss="modal">Add event</button>
            =======
            <div class="modal-footer d-flex justify-content-left">
              <button type="button" class="btn btn-success" @click="addShow">Add event</button>
              >>>>>>> d9f8ad292c9a0aa33bd13792b713fc353cea67b6
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'
  export default {
    name: "event-modal",
    props: ['shows', 'date'],
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
        debugger
        let artist = this.activeArtist
        let venue = this.activeVenue
        let payload = {}
        if (this.$store.state.activeArtist.artistName) {
          payload = {
            activeArtist: artist,
            data: this.newEvent
          }
          payload.data.artist = artist.artistName;
          payload.data.date = this.date
          this.$store.dispatch("scheduleEventArtist", payload)
        } else {
          payload = {
            activeVenue: venue,
            data: this.newEvent
          }
          payload.data.venue = venue.venueName;
          payload.data.date = this.date
          this.$store.dispatch("scheduleEventVenue", payload)
        }
        this.newEvent = {
          newEventDesc: "",
          newEventTime: ""
        }
      }
    },
    components: {
    },
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('dddd, LL')
      }
    }
  }; 
</script>