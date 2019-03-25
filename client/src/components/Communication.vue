<template>
   <div class="communication my-5 bg-warning pl-0">
      <div class="row aligning-stuff">
         <h3 class="col-12 py-4 aligning-stuff">Legatos (connections)</h3>
         <div class="col-5 offset-1 legato-image pl-0">
            <img v-if="viewDetails.userId" :src="viewDetails.image" class="img-fluid">
         </div>
         <div class="col-6 d-flex align-items-center pl-0">
            <h5 v-if="viewDetails.userId" class="text-left">{{viewDetails.artistName || viewDetails.venueName}}</h5>
         </div>
      </div>
      <div class="row my-3 pl-0">
         <div class="col-12">
            <form v-if="viewDetails.userId" class="form-inline">
               <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder=" Message...">
               <button type="submit" class="btn btn-sm btn-dark shadow mb-4 submit-message">Submit</button>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "communication",
      props: [],
      data() {
         return {}
      },
      computed: {
         activeArtist() {
            return this.$store.state.activeArtist;
         },
         activeVenue() {
            return this.$store.state.activeVenue;
         },
         viewDetails() {
            return this.$store.state.viewDetails
         }
      },
      methods: {},
      components: {}
   }
</script>

<style scoped>
   .img-fluid {
      height: 20vh;
      max-height: 40vh;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
   }

   .submit-message {
      margin-left: 81%;
      width: 375px;
   }

   .aligning-stuff {
      padding-right: 0;
      width: 375px;
   }
</style>