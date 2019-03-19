<template>
  <div class="container-fluid">
    <div class="dashboard">
      <nav>HOME - DASHBOARD - LOGOUT</nav>
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
    methods: {}
  };
</script>

<style>
  .action {
    cursor: pointer;
  }
</style>