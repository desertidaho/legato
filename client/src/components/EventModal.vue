<template>
  <div class="modal fade select" id="shows" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{date | formatTime}}</h5>
          <button type="button" class="close" data-dismiss="modal" @click="trashEvent = false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="shows.length">
            <p v-if="shows.length == 1">You have 1 event this day.</p>
            <p v-else>You have {{shows.length}} events this day.</p>
            <div v-for="show in shows">
              <div>
                <hr>
                <h4 class="text-left" v-if="!trashEvent">{{show.time}} -
                  {{show.details}} <i @click="deleteEvent(show)" class="d-flex justify-content-end fas fa-trash"></i>
                </h4>
                <h4 class="text-left strike-thru" v-if="trashEvent" :style="strikeThru">{{show.time}} -
                  {{show.details}} <i class="d-flex justify-content-end fas fa-trash"></i>
                </h4>
              </div>
              <!-- iterate of the shows -->
            </div>
          </div>
          <div v-else>
            <h4>You have no events scheduled on this day.</h4>
          </div>
        </div>
        <div class="modal-footer ">
          <form>
            <input class="form-control m-1" v-model="newEvent.details" placeholder="Event description" required></input>
            <input class="form-control m-1" v-model="newEvent.time" placeholder="Event time" required></input>
            <button type="button" class="btn btn-success" @click="addShow" data-dismiss="modal">Add event</button>
            <div class="modal-footer d-flex justify-content-left">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'
  export default {
    name: "event-modal",
    props: ['shows', 'date'],
    mounted() {
      this.$store.state.activeArtist
      this.$store.state.activeVenue
    },
    data() {
      return {
        newEvent: {
          details: "",
          time: ""
        },
        trashEvent: false,
        strikeThru: {
          textDecoration: 'line-through'
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
        let payload = {}
        if (this.$store.state.activeArtist.artistName) {
          payload = {
            activeArtist: artist,
            data: this.newEvent
          }
          payload.data.artistName = artist.artistName;
          payload.data.date = this.date
          this.$store.dispatch("scheduleEventArtist", payload)
        }
        if (this.$store.state.activeVenue.venueName) {
          {
            payload = {
              activeVenue: venue,
              data: this.newEvent
            }
            payload.data.venueName = venue.venueName;
            payload.data.date = this.date
            this.$store.dispatch("scheduleEventVenue", payload)
          }
          this.newEvent = {
            details: "",
            time: ""
          }
        }
      },
      deleteEvent(show) {
        if (show.artistName) {
          let payload = {
            endpoint: `artist/${show.userId}/artistSchedule/${show._id}`,
            data: show
          }
          this.$store.dispatch('deleteEvent', payload)
        } else if (show.venueName) {
          let payload = {
            endpoint: `venue/${show.userId}/venueSchedule/${show._id}`,
            data: show
          }
          this.$store.dispatch('deleteEvent', payload)
        }
        this.trashEvent = true
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