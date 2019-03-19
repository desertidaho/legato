<template>
  <div class="navbar">
    <nav class="bg-secondary text-white">
      <input class="form-control" placeholder="Search..."></input>
      <router-link tag="button" class="btn m-1" to="/">HOME</router-link>
      <router-link tag="button" class="btn m-1" to="/dashboard">DASHBOARD
      </router-link>
      <button class="btn btn-warning" @click="logOut">Logout</button>
    </nav>
  </div>
</template>


<script>
  export default {
    name: 'navbar',
    props: [],
    mounted() {
    },
    data() { },
    computed: {},
    methods: {},
    components: {},
    filters: {}
  }
</script>