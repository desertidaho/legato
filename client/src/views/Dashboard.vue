<template>
  <div class="container-fluid">
    <div class="dashboard">
      <nav class="bg-secondary text-white">
        <router-link tag="button" class="btn m-1" to="/">HOME</router-link>
        <router-link tag="button" class="btn m-1" to="/dashboard">DASHBOARD
        </router-link>
        <button class="btn btn-warning" @click="logOut">Logout</button>
      </nav>
      <h1>This is the dashboard view.</h1>
      <ul>
        <li>Profile</li>
        <li>Calendar/History</li>
        <li>Reviews</li>
        <li>Legato Connections</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "dashboard",
    data() {
      return {};
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logout", this.currentUser);
      }
    }
  };
</script>

<style>

</style>