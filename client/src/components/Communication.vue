<template>
   <div class="communication my-5 bg-warning">
      <div class="row">
         <h3 class="col-12 py-4">Legatos (connections)</h3>
         <div class="col-5 offset-1 legato-image">
            <img v-if="viewDetails.userId" :src="viewDetails.image" class="img-fluid">
         </div>
         <div class="col-6 d-flex align-items-center">
            <h5 v-if="viewDetails.userId" class="text-left">{{viewDetails.artistName || viewDetails.venueName}}</h5>
         </div>
      </div>
      <div class="row my-3">
         <div class="col-12">
            <form v-if="viewDetails.userId" class="form-inline" @submit.prevent="sendMessage">
               <input v-model="legato.message" type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                  placeholder=" Message...">
               <button type="submit" class="btn btn-sm btn-dark shadow mb-4 submit-message">Submit</button>
            </form>
         </div>
      </div>
      <div class="row bg-warning">
         <div class="col-12">
            <div class="row mt-3 py-3 mb-0">
               <h4 class="ml-3">Messages To:</h4>
               <div class="col-12" v-if="activeArtist.userId" v-for="message in activeArtist.legatosOut">
                  <p>
                     <span class="message-weight"> {{message.venueTo || message.artistTo}}</span> : {{message.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
               <div class="col-12" v-if="activeVenue.userId" v-for="message in activeVenue.legatosOut">
                  <p>
                     <span class="message-weight"> {{message.venueTo || message.artistTo}}</span> : {{message.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
            </div>
            <div class="row mt-0 py-3">
               <h4 class="ml-3">Messages From:</h4>
               <div class="col-12" v-if="activeArtist.userId" v-for="message in activeArtist.legatosIn">
                  <p>
                     <span class="message-weight"> {{message.venueFrom || message.artistFrom}}</span> :
                     {{message.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
               <div class="col-12" v-if="activeVenue.userId" v-for="message in activeVenue.legatosIn">
                  <p>
                     <span class="message-weight"> {{message.venueFrom || message.artistFrom}}</span> :
                     {{message.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "communication",
      props: [],
      data() {
         return {
            legato: {
               message: '',
               artistTo: '',
               artistFrom: '',
               venueTo: '',
               venueFrom: ''
            }
         }
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
      methods: {
         sendMessage() {
            let activeArtist = this.activeArtist
            let activeVenue = this.activeVenue
            let viewDetails = this.viewDetails
            let data = this.legato
            if (activeArtist.artistName) {
               data.artistFrom = activeArtist.artistName
               data.artistTo = viewDetails.artistName
               data.venueTo = viewDetails.venueName
               if (viewDetails.artistName) {
                  this.$store.dispatch('createLegatoToArtist', { activeArtist, viewDetails, data });
               } else {
                  this.$store.dispatch('createLegatoToVenue', { activeArtist, viewDetails, data });
               }
               this.$store.dispatch('createLegatoFromArtist', { activeArtist, viewDetails, data });
               event.target.reset()
            }
            if (activeVenue.venueName) {
               data.venueFrom = activeVenue.venueName
               data.artistTo = viewDetails.artistName
               data.venueTo = viewDetails.venueName
               if (viewDetails.artistName) {
                  this.$store.dispatch('createLegatoToArtist', { activeVenue, viewDetails, data });
               } else {
                  this.$store.dispatch('createLegatoToVenue', { activeVenue, viewDetails, data });
               }
               this.$store.dispatch('createLegatoFromVenue', { activeVenue, viewDetails, data });
               event.target.reset()
            }
         }
      },
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
   }

   .message-weight {
      font-weight: 500;
   }
</style>