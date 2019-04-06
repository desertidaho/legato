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
                <h4 class="text-left" v-if="!deletedId.includes(show._id)">{{show.time}} -
                  {{show.details}} <i @click="deleteEvent(show)" class="d-flex justify-content-end fas fa-trash"></i>
                </h4>
                <h4 class="text-left strike-thru" v-if="deletedId.includes(show._id)" :style="strikeThru">
                  {{show.time}} -
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
            <select v-model="newEvent.hour" class="btn btn-secondary m-2 w-10" required>
              <option value="" selected disabled hidden>Hour</option>
              <option class="hour">1</option>
              <option class="hour">2</option>
              <option class="hour">3</option>
              <option class="hour">4</option>
              <option class="hour">5</option>
              <option class="hour">6</option>
              <option class="hour">7</option>
              <option class="hour">8</option>
              <option class="hour">9</option>
              <option class="hour">10</option>
              <option class="hour">11</option>
              <option class="hour">12</option>
            </select>
            <select v-model=" newEvent.minute" class="btn btn-secondary m-2 w-10" required>
              <option value="" selected disabled hidden>Min</option>
              <option class="dd-item">:00</option>
              <option class="dd-item">:05</option>
              <option class="dd-item">:10</option>
              <option class="dd-item">:15</option>
              <option class="dd-item">:20</option>
              <option class="dd-item">:25</option>
              <option class="dd-item">:30</option>
              <option class="dd-item">:35</option>
              <option class="dd-item">:40</option>
              <option class="dd-item">:45</option>
              <option class="dd-item">50</option>
              <option class="dd-item">55</option>
            </select>
            <select v-model="newEvent.ampm" class="btn btn-secondary m-2 w-10" required>
              <option value="" selected disabled hidden>AM/PM</option>
              <option class="dd-item" value="am">AM</option>
              <option class="dd-item" value="pm">PM</option>
            </select><br>
            <!-- <input class="form-control m-1" v-model="newEvent.time" placeholder="Event time" required></input> -->
            <button type="button" class="btn btn-warning mt-2" @click="addShow" data-dismiss="modal">Add event</button>
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
          time: "",
          hour: "",
          minute: "",
          ampm: ""
        },
        trashEvent: false,
        deletedId: [],
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
        this.newEvent.time = this.newEvent.hour + this.newEvent.minute + this.newEvent.ampm
        let payload = {}
        if (this.$store.state.activeArtist.artistName) {
          payload = {
            activeArtist: artist,
            data: this.newEvent
          }
          payload.data.artistName = artist.artistName;
          payload.data.date = this.date
          this.$store.dispatch("scheduleEventArtist", payload)
          this.newEvent = {
            details: "",
            time: "",
            hour: "",
            minute: "",
            ampm: ""
          }
        }
        else if (this.$store.state.activeVenue.venueName) {
          payload = {
            activeVenue: venue,
            data: this.newEvent
          }
          payload.data.venueName = venue.venueName;
          payload.data.date = this.date
          this.$store.dispatch("scheduleEventVenue", payload)
          this.newEvent = {
            details: "",
            time: ""
          }
        }
      },
      deleteEvent(show) {
        this.deletedId.push(show._id)
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