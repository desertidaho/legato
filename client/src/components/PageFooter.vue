<template>
  <div class="footer text-light bg-dark">
    <div class="row mx-0 px-0">
<<<<<<< HEAD
      <div class="col-12 d-flex justify-content-center my-2">
        <i class="icon fab fa-twitter"></i><i class="icon fab fa-facebook-f ml-4"></i><i
          class="icon fab fa-instagram ml-4"></i><i class="fab fa-linkedin-in mt-2 ml-4"></i>
      </div>
    </div>
    <div class="row mx-0 px-0">
      <p class="col-12 footer-text text-center mt-2">© 2019 Legato</p>
=======
      <div class="col-12 d-flex justify-content-center my-4">
        <i class="icon fab fa-twitter"></i><i class="icon fab fa-facebook-f ml-5"></i><i
          class="icon fab fa-instagram ml-5"></i><i class="fab fa-linkedin-in mt-2 ml-5"></i>
      </div>
    </div>
    <div class="row mx-0 px-0">
      <p class="col-12 footer-text text-center mt-3">© 2019 Legato</p>
>>>>>>> 90b15ae1929d9906ed94ebdae03b7a20bf486f92
    </div>
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
  }
</style>