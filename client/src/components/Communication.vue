<template>
   <div class="communication my-5 bg-warning pl-0 container-fluid">
      <div class="row aligning-stuff">
         <h3 class="col-12 py-4 aligning-stuff">Connections</h3>
         <div class="col-5 offset-1 legato-image pl-0">
            <img v-if="viewDetails.userId" :src="viewDetails.image" class="img-fluid">
         </div>
         <div class="col-6 d-flex align-items-center pl-0">
            <h5 v-if="viewDetails.userId" class="text-left">{{viewDetails.artistName || viewDetails.venueName}}</h5>
         </div>
      </div>
      <div class="row my-3 pl-0">
         <div class="col-12">
            <form v-if="viewDetails.userId" class="form-inline" @submit.prevent="sendMessage">
               <textarea v-model="legato.message" type="text" class="form-control mb-2 mr-sm-2"
                  id="inlineFormInputName2" placeholder=" Message..."></textarea>
               <div class="row">
                  <div class="col-2 d-flex justify-content-start">
                     <button type="submit" class="btn btn-sm btn-secondary shadow mb-4 submit-message"
                        @click="resetViewDetails">Cancel</button>
                     <button type="submit" class="btn btn-sm btn-dark shadow mb-4 submit-message">Submit</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- artists if no viewDetails set dont touch-->
      <div class="row bg-warning px-0 mx-0" v-if="activeArtist.userId && !viewDetails.userId">
         <div class="col-12 text-left mx-2">
            <div class="row mt-0 py-3">
               <h4 class="col-12">Messages From:</h4>
               <div class="col-12" v-for="messageFrom in activeArtist.legatosIn">
                  <p>
                     <span class="message-weight" @click="setViewDetailsFrom(messageFrom)">
                        {{messageFrom.venueFrom || messageFrom.artistFrom}}</span> :
                     {{messageFrom.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
            </div>
            <div class="row mt-3 py-3 mb-0">
               <h4 class="col-12">Messages To:</h4>
               <div class="col-12" v-for="messageTo in activeArtist.legatosOut">
                  <p>
                     <span class="message-weight" @click="setViewDetailsTo(messageTo)">
                        {{messageTo.venueTo || messageTo.artistTo}}</span> : {{messageTo.message}}
                     <!--Reviews received go here-->
                  </p>
               </div>
            </div>
         </div>
      </div>
      <!-- artists if viewDetails is set working on-->
      <div class="row bg-warning px-0 mx-0" v-if="activeArtist.userId && viewDetails.userId">
         <div class="col-12 text-left mx-2">
            <div class="row mt-0 py-3">
               <h4 class="col-12">Messages From:</h4>
               <div class="col-12" v-for="messageFrom in filteredMessagesFrom">
                  <p>
                     <span class="message-weight">
                        {{messageFrom.venueFrom || messageFrom.artistFrom}}</span> :
                     {{messageFrom.message}}
                  </p>
               </div>
            </div>
            <div class="row mt-3 py-3 mb-0">
               <h4 class="col-12">Messages To:</h4>
               <div class="col-12" v-for="messageTo in filteredMessagesTo">
                  <p>
                     <span class="message-weight">
                        {{messageTo.venueTo || messageTo.artistTo}}</span> : {{messageTo.message}}
                  </p>
               </div>
            </div>
         </div>
      </div>
      <!-- venues if no viewDetails set don't touch-->
      <div class="row bg-warning px-0 mx-0" v-if="activeVenue.userId && !viewDetails.userId">
         <div class="col-12 text-left mx-2">
            <div class="row mt-0 py-3">
               <h4 class="ml-3">Messages From:</h4>
               <div class="col-12" v-for="messageFrom in activeVenue.legatosIn">
                  <p>
                     <span class="message-weight" @click="setViewDetailsFrom(messageFrom)">
                        {{messageFrom.venueFrom || messageFrom.artistFrom}}</span> :
                     {{messageFrom.message}}
                  </p>
               </div>
            </div>
            <div class="row mt-3 py-3 mb-0">
               <h4 class="ml-3">Messages To:</h4>
               <div class="col-12" v-for="messageTo in activeVenue.legatosOut">
                  <p>
                     <span class="message-weight" @click="setViewDetailsTo(messageTo)">
                        {{messageTo.venueTo || messageTo.artistTo}}</span> :
                     {{messageTo.message}}
                  </p>
               </div>
            </div>
         </div>
      </div>

      <!-- venues if viewDetails is set working on-->
      <div class="row bg-warning px-0 mx-0" v-if="activeVenue.userId && viewDetails.userId">
         <div class="col-12 text-left mx-2">
            <div class="row mt-0 py-3">
               <h4 class="ml-3">Messages From:</h4>
               <div class="col-12" v-for="messageFrom in filteredMessagesFrom">
                  <p>
                     <span class="message-weight">
                        {{messageFrom.venueFrom || messageFrom.artistFrom}}</span> :
                     {{messageFrom.message}}
                  </p>
               </div>
            </div>
            <div class="row mt-3 py-3 mb-0">
               <h4 class="ml-3">Messages To:</h4>
               <div class="col-12" v-for="messageTo in filteredMessagesTo">
                  <p>
                     <span class="message-weight">
                        {{messageTo.venueTo || messageTo.artistTo}}</span> :
                     {{messageTo.message}}
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
            },
            filteredMessagesFrom: [],
            filteredMessagesTo: []
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
         },
         artists() {
            return this.$store.state.artists
         },
         venues() {
            return this.$store.state.venues
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
               this.resetForm()
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
               this.resetForm()
            }
         },
         setViewDetailsFrom(messageFrom) {
            let artists = this.artists
            let venues = this.venues
            if (messageFrom.venueFrom) {
               for (let i = 0; i < venues.length; i++) {
                  if (venues[i].venueName == messageFrom.venueFrom) {
                     let venue = venues[i]
                     this.$store.dispatch('setVenueViewDetails', venue)
                  }
               }
            }
            if (messageFrom.artistFrom) {
               for (let i = 0; i < artists.length; i++) {
                  if (artists[i].artistName == messageFrom.artistFrom) {
                     let artist = artists[i]
                     this.$store.dispatch('setArtistViewDetails', artist)
                  }
               }
            }
            window.location.hash = "comms";
            this.filterMessagesTo()
            this.filterMessagesFrom()

         },
         setViewDetailsTo(messageTo) {
            let artists = this.artists
            let venues = this.venues
            if (messageTo.venueTo) {
               for (let i = 0; i < venues.length; i++) {
                  if (venues[i].venueName == messageTo.venueTo) {
                     let venue = venues[i]
                     this.$store.dispatch('setVenueViewDetails', venue)
                  }
               }
            }
            if (messageTo.artistTo) {
               for (let i = 0; i < artists.length; i++) {
                  if (artists[i].artistName == messageTo.artistTo) {
                     let artist = artists[i]
                     this.$store.dispatch('setArtistViewDetails', artist)
                  }
               }
            }
            window.location.hash = "comms";
            this.filterMessagesTo()
            this.filterMessagesFrom()
         },
         resetViewDetails() {
            let viewDetails = this.viewDetails
            if (viewDetails.artstName) {
               this.$store.dispatch('setArtistViewDetails', {})
            } else {
               this.$store.dispatch('setVenueViewDetails', {})
            }
            this.filteredMessagesFrom = []
            this.filteredMessagesTo = []
         },
         filterMessagesFrom() {
            let activeArtist = this.activeArtist
            let activeVenue = this.activeVenue
            let viewDetails = this.viewDetails
            let filteredMessagesFrom = this.filteredMessagesFrom
            if (activeArtist.userId) {
               for (let i = 0; i < activeArtist.legatosIn.length; i++) {
                  if (activeArtist.legatosIn[i].venueFrom == viewDetails.venueName) {
                     filteredMessagesFrom.push(activeArtist.legatosIn[i])
                  }
                  if (activeArtist.legatosIn[i].artistFrom == viewDetails.artistName) {
                     filteredMessagesFrom.push(activeArtist.legatosIn[i])
                  }
               }
            }
            if (activeVenue.userId) {
               for (let i = 0; i < activeVenue.legatosIn.length; i++) {
                  if (activeVenue.legatosIn[i].venueFrom == viewDetails.venueName) {
                     filteredMessagesFrom.push(activeVenue.legatosIn[i])
                  }
                  if (activeVenue.legatosIn[i].artistFrom == viewDetails.artistName) {
                     filteredMessagesFrom.push(activeVenue.legatosIn[i])
                  }
               }
            }
            return filteredMessagesFrom
         },
         filterMessagesTo() {
            let activeArtist = this.activeArtist
            let activeVenue = this.activeVenue
            let viewDetails = this.viewDetails
            let filteredMessagesTo = this.filteredMessagesTo
            if (activeArtist.userId) {
               for (let i = 0; i < activeArtist.legatosOut.length; i++) {
                  if (viewDetails.venueName) {
                     if (activeArtist.legatosOut[i].venueTo == viewDetails.venueName) {
                        filteredMessagesTo.push(activeArtist.legatosOut[i])
                     }
                  } else {
                     if (activeArtist.legatosOut[i].artistTo == viewDetails.artistName) {
                        filteredMessagesTo.push(activeArtist.legatosOut[i])
                     }
                  }
               }
            }
            if (activeVenue.userId) {
               for (let i = 0; i < activeVenue.legatosOut.length; i++) {
                  if (viewDetails.venueName) {
                     if (activeVenue.legatosOut[i].venueTo == viewDetails.venueName) {
                        filteredMessagesTo.push(activeVenue.legatosOut[i])
                     }
                  } else {
                     if (activeVenue.legatosOut[i].artistTo == viewDetails.artistName) {
                        filteredMessagesTo.push(activeVenue.legatosOut[i])
                     }
                  }
               }
            }
            return filteredMessagesTo
         }
      },
      components: {}
   };
</script>

<style scoped>
   .communication {
      overflow-x: hidden;
   }

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

   .message-weight {
      font-weight: 500;
      cursor: pointer;
   }
</style>