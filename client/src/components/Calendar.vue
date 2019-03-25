<template>
  <div class="calendar container-fluid">
    <h3 class="mt-5 mb-3">Event calendar</h3>
    <v-calendar v-if="showAvailability" is-double-paned :theme-styles='themeStyles' :attributes="attributes"
      @dayclick="dayClicked">
    </v-calendar>
    <div v-else class="row">
      <div class="col-12 d-flex justify-content-center">
        <v-date-picker mode='single' v-model='selectedDate'>

        </v-date-picker>
      </div>
    </div><br>
    <button @click="addToCalendar(selectedDate)" class="text-center btn btn-sm btn-secondary m-3 shadow">Add to
      calendar</button>
    <button @click="showAvailability = !showAvailability" class="text-center btn btn-sm btn-dark m-3 shadow">
      {{showAvailability ? 'Schedule a show' : 'View availability'}}</button>

  </div>
</template>


<script>

  export default {
    name: 'calendar',
    props: [],
    mounted() {
    },
    data() {
      return {
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
            highlight: {
              backgroundColor: '#ff8080',
              borderColor: '#ff6666',
              borderWidth: '2px',
              borderStyle: 'solid'
            },
            contentStyle: {
              color: 'white',
            },
            dates: []
          }
        ],
        selectedDate: new Date()
      }
    },
    computed: {},
    methods: {
      dayClicked(day) {
        this.selectedDate = day;
      },
      addToCalendar(selectedDate) {
        let month = selectedDate.getMonth()
        let day = selectedDate.getDate()
        let year = selectedDate.getFullYear()
        let date = new Date(year, month, day)
        this.attributes[0].dates.push(date)
      }
    },
    components: {},
    filters: {},
    watch: {
      selectedDate: {
        handler: function (val) {
          console.log('changed the selected date')
          // query the db and check if the venue at that date is available
          // if it is then you can give the user an option to confirm the booking
          // else tell the user that that date is booked
        }
      }
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
</style>