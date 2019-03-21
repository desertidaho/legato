<template>
  <div class="footer text-light bg-dark text-center">
    <i class="icon fab fa-twitter"></i><i class="icon fab fa-facebook-f"></i><i class="icon fab fa-instagram"></i><i
      class="fab fa-linkedin-in"></i>
    <p class="footer-text">©2019 Legato</p>
  </div>
</template>


<script>
  export default {
    name: 'page-footer',
    props: [],
    mounted() {
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    components: {},
    filters: {}
  }
</script>

<style>
  p {
    margin: 0px;
  }

  .footer-text {
    font-size: 12px;
    padding-bottom: 5px;
  }

  .icon {
    padding-top: 8px;
    padding-right: 15px;
  }
</style>