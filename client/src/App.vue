<template>
  <div id="app container-fluid">
    <div id="nav">

    </div>
    <router-view />
    <page-footer></page-footer>
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
    color: #2c3e50;
  }

  #nav {
    /* padding: 30px; */
  }

  #nav a {
    /* font-weight: bold;
    color: #2c3e50; */
  }

  #nav a.router-link-exact-active {
    /* color: #42b983; */
  }

  /* 
  .container-fluid {
    padding-left: 0px;
  } */
</style>