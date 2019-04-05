<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="@/assets/pic2.png" alt="First slide">
        <div class="carousel-caption">
          <h5>"Legato is awesome!"<br><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i
              class="fas fa-star"></i>
            <i class="fas fa-star"></i> <i class="fas fa-star"></i></h5>
          <p>- Pretty Lights</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@/assets/pic3.png" alt="Second slide">
        <div class="carousel-caption">
          <h5>"Legato helps you easily connect with others."</h5>
          <p>- Sewing Factory</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@/assets/pic1.png" alt="Third slide">
        <div class="carousel-caption">
          <h5>"Boost the live music scene with Legato."
          </h5>
          <p>- PostFunk</p>
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
    name: 'carousel',
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
</style>