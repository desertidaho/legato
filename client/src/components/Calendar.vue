<template>
  <div class="calendar container-fluid">
    <v-calendar is-double-paned>
    </v-calendar>
    <v-date-picker mode='single' v-model='selectedValue'>
    </v-date-picker>
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
        selectedValue: new Date(),
      }
    },
    computed: {},
    methods: {},
    components: {},
    filters: {}
  }
</script>

<style>

</style>