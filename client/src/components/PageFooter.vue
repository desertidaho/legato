<template>
  <div class="footer text-light bg-dark">
    <div class="row mx-0 px-0">
      <div class="col-12 d-flex justify-content-center my-4">
        <a target="_blank" href="http://www.twitter.com"><i title="Twitter" class="icon fab fa-twitter"></i></a>
        <a target="_blank" href="http://www.facebook.com"><i title="Facebook"
            class="icon fab fa-facebook-f ml-5"></i></a>
        <a target="_blank" href="http://www.instagram.com"><i title="Instagram"
            class="icon fab fa-instagram ml-5"></i></a>
        <a target="_blank" href="http://www.linkedin.com"><i title="LinkedIn"
            class="fab fa-linkedin-in mt-2 ml-5"></i></a>
      </div>
    </div>
    <div class="row mx-0 px-0">
      <p class="col-12 footer-text text-center mt-3 mb-2">© {{date | formatTime}} Legato</p>
    </div>
  </div>
</template>


<script>
  import Moment from 'moment'
  export default {
    name: 'page-footer',
    props: [],
    mounted() {
    },
    data() {
      return {
        date: new Date(Date.now())
      }
    },
    computed: {
    },
    methods: {},
    components: {},
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('YYYY')
      }
    }
  }
</script>

<style scoped>
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

  .fab {
    color: white;
  }

  /* .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 123px;
  } */
</style>