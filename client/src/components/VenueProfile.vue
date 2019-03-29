<template>
  <div class="container-fluid venue-profile text-left mt-3">
    <div class="row">
      <div class="d-flex col-12 justify-content-center">
        <img class="profile-pic ml-3" :src="profile.image" alt="Profile photo">
        <i @click="editImage = !editImage"
          class="d-flex justify-content-end align-items-end icon-toggle fas fa-pencil-alt"></i><input class="image-edit"
          v-if="
          editImage" type="text" placeholder="Paste link to new image" v-model="newProfile.image">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <p class="question">Venue name &nbsp<input v-if="editName" type="text" placeholder="Change name..."
            v-model="newProfile.venueName"><i @click="editName = !editName" title="Edit name"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.venueName}}</span></p>
        <hr>
        <p class="question">Maximum occupancy &nbsp<input v-if="editMaxOccupancy" type="number"
            placeholder="Change number..." v-model="newProfile.maxOccupancy"><i
            @click="editMaxOccupancy = !editMaxOccupancy" title="Edit number"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.maxOccupancy}}</span>
        </p>
        <hr>
        <p class="question">21 & up or All ages?<i @click="editAllAges = !editAllAges"
            class="fas icon-toggle fa-pencil-alt"></i>
          <div v-if="editAllAges">
            <input class="ml-1" type="radio" name="over20" :value="false" v-model="newProfile.allAges">
            <label>&nbsp21 & up &nbsp</label>
            <input type="radio" name="artist" v-model="newProfile.allAges" :value="true">
            <label>&nbspAll ages</label>
          </div>
        </p>
        <hr>
        <p class="question">Style of your venue &nbsp
          <select v-if="editVenueStyle" v-model="newProfile.venueStyle" class="btn btn-dark ml-3">
            <option class="dd-item" value="">(Desired style of artist)</option>
            <option class="dd-item" value="Ballroom">Ballroom</option>
            <option class="dd-item" value="Theater">Theater</option>
            <option class="dd-item" value="Stadium">Stadium</option>
            <option class="dd-item" value="Bar">Bar</option>
            <option class="dd-item" value="Dance">Dance</option>
            <option class="dd-item" value="Restaurant">Restaurant</option>
            <option class="dd-item" value="Outdoor venue">Outdoor venue</option>
            <option class="dd-item" value="Coffee house">Coffee house</option>
            <option class="dd-item" value="Other">Other</option>
          </select>
          <i @click="editVenueStyle = !editVenueStyle" class="fas icon-toggle fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueStyle}}</span></p>
        <hr>

        <p class="question">Current city &nbsp<input v-if="editCity" type="text" placeholder="Edit city"
            v-model="newProfile.city"><i @click="editCity = !editCity"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.city}}</span></p>
        <hr>
        <p class="question">Current state &nbsp<input v-if="editState" type="text" placeholder="Edit state"
            v-model="newProfile.state"><i @click="editState = !editState"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.state}}</span></p>
        <hr>
        <p class="question">Equipment provided &NonBreakingSpace;<input v-if="editGear" type="text"
            placeholder="Edit gear..." v-model="newProfile.equipmentDetails"><i @click="editGear = !editGear"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.equipmentDetails}}</span></p>
        <hr>
        <p class="question">Venue description &nbsp<input v-if="editDescription" type="text"
            placeholder="Edit venue description..." v-model="newProfile.venueDescription"><i
            @click="editDescription = !editDescription" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueDescription}}</span></p>
        <hr>
        <p class="question">Additional details &nbsp<input v-if="editDetails" type="text"
            placeholder="Edit additional details..." v-model="newProfile.venueDetails"><i
            @click="editDetails = !editDetails" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueDetails}}</span></p>
        <hr>
        <p class="question">Social media <i @click="editSocialMedia = !editSocialMedia"
            class="fas icon-toggle fa-pencil-alt"></i><br v-if="editSocialMedia"><span
            v-if="profile.twitter || editSocialMedia">Twitter:
            {{profile.twitter}}</span><input v-if="editSocialMedia" type="text" placeholder="Twitter URL"
            v-model="newProfile.twitter"><br v-if="editSocialMedia"><span
            v-if="profile.facebook || editSocialMedia">Facebook:
            {{profile.facebook}}</span><input v-if="editSocialMedia" type="text" placeholder="Facebook URL"
            v-model="newProfile.facebook"><br v-if="editSocialMedia"><span
            v-if="profile.insgram || editSocialMedia">Instagram:
            {{profile.instagram}}</span><input v-if="editSocialMedia" type="text" placeholder="Instagram URL"
            v-model="newProfile.instagram"><br v-if="editSocialMedia"><span
            v-if="profile.linkedIn || editSocialMedia">LinkedIn:
            {{profile.linkedIn}}</span><input v-if="editSocialMedia" type="text" placeholder="LinkedIn URL"
            v-model="newProfile.LinkedIn"><br v-if="editSocialMedia">
          <hr>
          <p class="question mb-4">Contact &nbsp<input v-if="editContact" type="text" placeholder="Contact person"
              v-model="newProfile.contact"><i @click="editContact = !editContact"
              class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.contact}}</span></p>
          <hr>
          <p class="question mb-4">Phone &nbsp<input v-if="editPhone" type="tel" placeholder="(xxx) xxx-xxxx"
              v-model="newProfile.phone"><i @click="editPhone = !editPhone"
              class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.phone}}</span></p>
          <button v-if="changes" class="btn btn-dark mb-3" @click="editProfile">Save changes</button>
      </div>
    </div>
    <div class="row bg-warning">
      <div class="col-12">
        <div class="row mt-3 py-3 mb-0">
          <h4 class="ml-3">Reviews given:</h4>
          <div class="col-12" v-for="review in profile.reviewsGiven">
            <p>
              <span class="review-weight"> {{review.venueTo || review.artistTo}}</span> : {{review.feedback}}
              <!--Reviews received go here-->
            </p>
          </div>
        </div>
        <div class="row mt-0 py-3">
          <h4 class="ml-3">Reviews from:</h4>
          <div class="col-12" v-for="review in profile.reviewsReceived">
            <p>
              <span class="review-weight"> {{review.venueFrom || review.artistFrom}}</span> : {{review.feedback}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'venueProfile',
    props: [],
    mounted() {
    },
    data() {
      return {
        newProfile: {
          venueName: '',
          maxOccupancy: 0,
          allAges: 0,
          venueStyle: "",
          image: "",
          city: "",
          state: "",
          equipmentDetails: "",
          venueDescription: "",
          twitter: "",
          facebook: "",
          instagram: "",
          linkedIn: "",
          phone: "",
          contact: ""
        },
        editImage: false,
        editName: false,
        editMaxOccupancy: false,
        editVenueStyle: false,
        editImage: false,
        editAllAges: false,
        editCity: false,
        editState: false,
        editGear: false,
        editDescription: false,
        editDetails: false,
        editSocialMedia: false,
        editPhone: false,
        editContact: false
      }
    },
    computed: {
      profile() {
        return this.$store.state.activeVenue
      },
      user() {
        return this.$store.state.user
      },
      changes() {
        let theBool = false;
        for (let prop in this.newProfile) {
          if (this.newProfile[prop]) {
            theBool = true
            break
          }
        }
        return theBool
      }
    },
    methods: {
      editProfile() {
        let updated = {}
        // for/in loop
        //if the edited value is true than include it in the updated object
        for (let prop in this.newProfile) {
          if (this.newProfile[prop]) {
            updated[prop] = this.newProfile[prop]
          }
        }
        //dispatch
        let type = 'venue'
        let payload = {
          endpoint: type,
          _id: this.profile._id,
          data: updated,
          artist: false,
          userId: this.user._id
        }
        this.$store.dispatch("editProfile", payload)
      }
    },
    components: {},
    filters: {}
  }
</script>


<style>
  .profile-pic {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  .icon-toggle {
    float: right;
  }

  .dd-item:hover {
    cursor: pointer;
    background-color: #545b62 !important;
    color: white !important;
  }

  .icon-toggle:hover {
    cursor: pointer;
  }

  .question {
    font-size: 14px;
    color: grey;
  }

  .answer {
    color: black;
    font-size: 18px;
  }

  .image-edit {
    height: 20%;
    margin-top: 32%;
    margin-left: 5px;
  }

  .review-weight {
    font-weight: 500;
  }
</style>