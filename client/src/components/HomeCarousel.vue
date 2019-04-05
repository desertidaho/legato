<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block" src="@/assets/pic6.png" alt="First slide">
        <div class="carousel-caption">
          <h5>STS9</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block" src="@/assets/pic4.png" alt="Second slide">
        <div class="carousel-caption">
          <h5>Bluebird Jazz Combo</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block" src="@/assets/pic5.png" alt="Third slide">
        <div class="carousel-caption">
          <h5>Knitting Factory</h5>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>


<script>
  export default {
    name: 'home-carousel',
    props: [],
    mounted() {
    },
    data() { return {} },
    computed: {},
    methods: {},
    components: {},
    filters: {}
  }
</script>

<style>
  .carousel-caption {
    text-shadow: 0 0 5px black;
  }

  img {
    height: auto;
    width: auto;
    background-position: center;
    background-attachment: local;
    background-size: cover;
  }
</style>