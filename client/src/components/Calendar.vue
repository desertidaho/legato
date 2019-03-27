<template>
  <div class="calendar container-fluid">
    <h3 class="mt-5 mb-3">Your e<img src="../assets/logo.png" style="height: 0.8em">ent calendar</h3>
    <v-calendar v-if="showAvailability" is-expanded is-double-paned :theme-styles='themeStyles' :attributes="attributes"
      @dayclick="dayClicked" data-toggle="modal" data-target="#events">
    </v-calendar>
    <div v-else class="row">
      <div class="col-12 d-flex justify-content-center">
        <v-date-picker mode='single' v-model='selectedDate'>

        </v-date-picker>
      </div>
    </div><br>
    <button class="text-center btn btn-sm btn-warning shadow m-3">Today</button>
    <!-- Modal -->
    <event-modal :shows="shows" :date="date" />
    <div class="hidden">{{calendar}}</div>
  </div>
</template>


<script>
  import EventModal from '@/components/EventModal.vue'

  export default {
    name: 'calendar',
    props: [],
    mounted() {

    },
    data() {
      return {
        shows: [],
        date: "",
        showAvailability: true,
        todos: [
          {
            id: 1,
            description: 'Clean the house.',
            date: new Date(2018, 0, 15),
            isCompleted: false,
            color: 'red'
          },
        ],
        themeStyles: {
          wrapper: {
            backgroundColor: '#343a40',
            color: '#fafafa',
            border: '0',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 6px 20px 0 rgba(0, 0, 0, 0.13)'
          }
        },
        attributes: [
          {
            highlight: { // Regularly highlight events
              backgroundColor: '#ff8022',
              borderColor: '#ff6666',
              borderWidth: '1px',
              borderStyle: 'solid'
            },
            contentStyle: {
              color: 'white',
            },
            dates: []
          },
          {
            highlight: { // Highlight today
              backgroundColor: 'none',
              borderColor: 'none',
              borderWidth: '0px',
              borderStyle: 'solid'
            },
            contentStyle: {
              color: 'gold',
            },
            dates: [
            ]
          }
        ],
        selectedDate: new Date()
      }
    },
    computed: {
      schedule() {
        if (this.$store.state.activeArtist.artistName) {
          return this.$store.state.activeArtist.artistSchedule
        } else {
          return this.$store.state.activeVenue.venueSchedule
        }
      },
      calendar() {
        let current = new Date();
        this.attributes[1].dates.push(current)
        if (this.$store.state.activeArtist.artistName) {
          let artistDates = this.$store.state.activeArtist.artistSchedule.map(a => a.date)
          this.attributes[0].dates = artistDates
        } else if (this.$store.state.activeVenue.venueSchedule) {
          let venueDates = this.$store.state.activeVenue.venueSchedule.map(v => v.date)
          this.attributes[0].dates = venueDates
        }
        return { a: this.$store.state.activeArtist, v: this.$store.state.activeVenue }
      }
    },
    methods: {
      findShowsByDate(date) {
        let arr = this.schedule;
        let shows = arr.filter(show => show.date == date.toISOString())
        this.shows = shows
        this.date = date
      },
      dayClicked(data) {
        let month = data.month - 1
        let day = data.day
        let year = data.year
        let date = new Date(year, month, day)
        this.findShowsByDate(date)
        $('#shows').modal('show')
      }
    },
    components: {
      EventModal
    },
    filters: {},
    watch: {
      selectedDate: {
        handler: function (val) {
          console.log("clicked date")
        }
      },
    }
  }
</script>

<style>
  .calendar {
    min-height: 30vh;
  }

  .popover-container {
    width: fit-content;
  }

  .hidden {
    display: none
  }
</style>