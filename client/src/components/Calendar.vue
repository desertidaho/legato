<template>
  <div class="calendar container-fluid">
    <h3 class="mt-5 mb-3">Your event calendar</h3>
    <v-calendar v-if="showAvailability" is-expanded is-double-paned :theme-styles='themeStyles' :attributes="attributes"
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
    <button class="text-center btn btn-sm btn-dark m-3">Today</button>

  </div>
</template>


<script>

  export default {
    name: 'calendar',
    props: [],
    mounted() {
      let current = new Date();
      this.attributes[1].dates.push(current)
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
            backgroundColor: '#343aff',
            color: '#fafafa',
            border: '0',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 6px 20px 0 rgba(0, 0, 0, 0.13)'
          }
        },
        attributes: [
          {
            highlight: {
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
            highlight: {
              backgroundColor: 'gold',
              borderColor: 'gold',
              borderWidth: '1px',
              borderStyle: 'solid'
            },
            contentStyle: {
              color: 'black',
            },
            dates: [

            ]
          }
        ],
        selectedDate: new Date()
      }
    },
    computed: {},
    methods: {
      dayClicked(data) {
        let month = data.month - 1
        let day = data.day
        let year = data.year
        let date = new Date(year, month, day)
        let datesArr = this.attributes[0].dates
        for (let i = 0; i < datesArr; i++) {
          let d = datesArr[i];
          if (d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear == date.getFullYear) {
            this.attributes[0].dates.splice(i, 1)
            debugger
            return;
          }
        }
        this.attributes[0].dates.push(date)
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
          console.log("clicked date")
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