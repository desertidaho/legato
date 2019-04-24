<template>
  <div>
    <div id="app">
      <div id="nav">
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

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