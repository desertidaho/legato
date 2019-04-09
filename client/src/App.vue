<template>
  <div>
    <div id="app">
      <div id="nav">
      </div>
      <router-view />
    </div>
    <!-- <page-footer></page-footer> -->
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter.vue'

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    mounted() {
      // Authenticate on startup
      this.$store.dispatch('authenticate')
    },
    methods: {

    },
    components: {
      PageFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow-x: hidden !important;
    color: #2c3e50;
  }
</style>