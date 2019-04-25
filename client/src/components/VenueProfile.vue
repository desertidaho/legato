<template>
  <div class="venue-profile text-left mt-3">
    <div class="row">
      <div class="d-flex col-12 justify-content-center mt-2">
        <img class="profile-pic" :src="profile.image" alt="Profile photo">
        <i v-if="edit" @click="editImage = !editImage"
          class="d-flex justify-content-end align-items-end icon-toggle fas fa-pencil-alt" title="Edit image"></i><input
          class="image-edit" v-if="
          editImage" type="text" placeholder="Paste link to new image" v-model="newProfile.image">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-10 offset-1 col-md-6 offset-md-3">
        <p class="question">Venue name &nbsp<input v-if="editName" type="text" placeholder="Change name..."
            v-model="newProfile.venueName"><i v-if="edit" @click="editName = !editName" title="Edit name"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.venueName}}</span></p>
        <hr>
        <p class="question">Maximum occupancy &nbsp<input v-if="editMaxOccupancy" type="number"
            placeholder="Change number..." v-model="newProfile.maxOccupancy"><i v-if="edit"
            @click="editMaxOccupancy = !editMaxOccupancy" title="Edit number"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.maxOccupancy}}</span>
        </p>
        <hr>
        <p class="question">21 & up or All ages?<i v-if="edit" @click="editAllAges = !editAllAges"
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
            <option class="dd-item" value="" selected disabled hidden>(Desired style of artist)</option>
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
          <i v-if="edit" @click="editVenueStyle = !editVenueStyle" class="fas icon-toggle fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueStyle}}</span></p>
        <hr>

        <p class="question">Current city &nbsp<input v-if="editCity" type="text" placeholder="Edit city"
            v-model="newProfile.city"><i v-if="edit" @click="editCity = !editCity"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.city}}</span></p>
        <hr>
        <p class="question">Current state &nbsp<input v-if="editState" type="text" placeholder="Edit state"
            v-model="newProfile.state"><i v-if="edit" @click="editState = !editState"
            class="icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.state}}</span></p>
        <hr>
        <p class="question">Equipment provided &NonBreakingSpace;<input v-if="editGear" type="text"
            placeholder="Edit gear..." v-model="newProfile.equipmentDetails"><i v-if="edit"
            @click="editGear = !editGear" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.equipmentDetails}}</span></p>
        <hr>
        <p class="question">Venue description &nbsp<input v-if="editDescription" type="text"
            placeholder="Edit venue description..." v-model="newProfile.venueDescription"><i v-if="edit"
            @click="editDescription = !editDescription" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueDescription}}</span></p>
        <hr>
        <p class="question">Additional details &nbsp<input v-if="editDetails" type="text"
            placeholder="Edit additional details..." v-model="newProfile.venueDetails"><i v-if="edit"
            @click="editDetails = !editDetails" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.venueDetails}}</span></p>
        <hr>
        <!-- CHANGE ALL TO ANCHOR TAGS -->
        <p class="question">Social media <i v-if="edit" @click="editSocialMedia = !editSocialMedia"
            class="fas icon-toggle fa-pencil-alt" title="Edit social media"></i><br v-if="editSocialMedia"><br><br><span
            class="answer" v-if="profile.twitter || editSocialMedia">
            <a :href="profile.facebook" target="_blank">Twitter</a></span><input v-if="editSocialMedia" type="text"
            placeholder="Twitter URL" v-model="newProfile.twitter"><br v-if="editSocialMedia"><br><span class="answer"
            v-if="profile.facebook || editSocialMedia">
            <a :href="profile.facebook" target="_blank">Facebook</a></span><input v-if="editSocialMedia" type="text"
            placeholder="Facebook URL" v-model="newProfile.facebook"><br v-if="editSocialMedia"><br><span class="answer"
            v-if="profile.instagram || editSocialMedia">
            <a :href="profile.facebook" target="_blank">Instagram</a></span><input v-if="editSocialMedia" type="text"
            placeholder="Instagram URL" v-model="newProfile.instagram"><br v-if="editSocialMedia"><br><span
            class="answer" v-if="profile.linkedIn || editSocialMedia">
            <a :href="profile.facebook" target="_blank">LinkedIn</a></span><input v-if="editSocialMedia" type="text"
            placeholder="LinkedIn URL" v-model="newProfile.linkedIn"><br v-if="editSocialMedia">
          <hr>
          <p class="question mb-4">Contact &nbsp<input v-if="editContact" type="text" placeholder="Contact person"
              v-model="newProfile.contact"><i v-if="edit" @click="editContact = !editContact"
              class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.contact}}</span></p>
          <hr>
          <p class="question">Showcase an image of your venue. <i v-if="edit"
              @click="editImageShowcase = !editImageShowcase" class="fas icon-toggle fa-pencil-alt"
              title="Edit Image Showcase"></i><br v-if="editImageShowcase"><br><span class="answer"
              v-if="profile.imageShowcase || editImageShowcase">
              <img class="showcase img-fluid" :src="profile.imageShowcase"></span><input v-if="editImageShowcase"
              type="text" placeholder="image URL" v-model="newProfile.imageShowcase"><br v-if="editImageShowcase"><br>
            <hr>
            <p class="question mb-4">Phone &nbsp<input v-if="editPhone" type="tel" placeholder="(xxx) xxx-xxxx"
                v-model="newProfile.phone"><i v-if="edit" @click="editPhone = !editPhone"
                class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.phone}}</span></p>
            <button v-if="changes" class="btn btn-dark shadow mt-3 mb-5" @click="editProfile">Save
              changes</button><button @click="edit = !edit" class="btn btn-secondary float-right mt-3 mb-5 mr-1">Edit
              Profile</button>
      </div>
    </div>
    <div class="bg-warning pt-2 pb-5">
      <div class="row">
        <div class="col-12 mt-4 pt-3 mb-0 review-width move-right">
          <h4 class="ml-3">Reviews Received</h4>
        </div>
      </div>
      <div class="row">
        <div class="review-width">
          <div class="col-10 offset-1 ml-5 col-md-6 offset-md-3 reviews shadow mb-2"
            v-for="review in profile.reviewsReceived">
            <p class="text-left ml-1 mt-2">
              <i> {{review.venueFrom || review.artistFrom}}</i>
              <span><i v-if="review.stars == 1" class="fas fa-star ml-2"></i></span>
              <span v-if="review.stars == 2"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 3"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i></span>
              <span v-if="review.stars == 4"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 5"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <br>{{review.feedback}}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-0 pt-5">
        <div class="col-12 review-width move-right">
          <h4 class="ml-4">Reviews Given</h4>
        </div>
      </div>
      <div class="row">
        <div class="review-width">
          <div class="col-10 offset-1 ml-5 col-md-6 offset-md-3 reviews shadow mb-2"
            v-for="review in profile.reviewsGiven">
            <p class="text-left ml-1 mt-2">
              <i> {{review.venueTo || review.artistTo}}</i>
              <span><i v-if="review.stars == 1" class="fas fa-star ml-2"></i></span>
              <span v-if="review.stars == 2"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 3"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i></span>
              <span v-if="review.stars == 4"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 5"><i class="fas fa-star ml-2"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <br>{{review.feedback}}
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
          maxOccupancy: NaN,
          allAges: 0,
          venueStyle: "",
          image: "",
          city: "",
          state: "",
          equipmentDetails: "",
          venueDescription: "",
          imageShowcase: "",
          twitter: "",
          facebook: "",
          instagram: "",
          linkedIn: "",
          phone: "",
          contact: "",
          imageShowcase: ""
        },
        edit: false,
        editImage: false,
        editName: false,
        editMaxOccupancy: false,
        editVenueStyle: false,
        editImage: false,
        editAllAges: false,
        editCity: false,
        editState: false,
        editGear: false,
        editImageShowcase: false,
        editDescription: false,
        editDetails: false,
        editSocialMedia: false,
        editPhone: false,
        editContact: false,
        editImageShowcase: false
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
        this.newProfile = {
          venueName: '',
          maxOccupancy: NaN,
          allAges: 0,
          venueStyle: "",
          image: "",
          city: "",
          state: "",
          equipmentDetails: "",
          venueDescription: "",
          imageShowcase: "",
          twitter: "",
          facebook: "",
          instagram: "",
          linkedIn: "",
          phone: "",
          contact: ""
        }
        this.edit = false
        this.editImage = false
        this.editName = false
        this.editMaxOccupancy = false
        this.editVenueStyle = false
        this.editImage = false
        this.editAllAges = false
        this.editCity = false
        this.editState = false
        this.editGear = false
        this.editImageShowcase = false
        this.editDescription = false
        this.editDetails = false
        this.editSocialMedia = false
        this.editPhone = false
        this.editContac = false
      }
    },
    components: {},
    filters: {}
  }
</script>


<style>
  .profile-pic {
    height: 160px !important;
    width: 160px !important;
    object-fit: cover;
    border-color: white;
    border-style: solid;
    border-width: thick;
    border-radius: 50%;
    box-shadow: 0 0 7px black;
  }

  .fa-pencil-alt {
    color: black;
  }

  .icon-toggle {
    float: right;
  }

  .image-edit {
    height: 20%;
    margin-top: 32%;
    margin-left: 5px;
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

  .review-width {
    width: 100vw !important;
  }

  .review-weight {
    font-weight: 500;
  }

  .reviews {
    background-color: rgb(230, 228, 228);
    background: linear-gradient(to right, rgb(175, 174, 174) 60%, #dbdada);
    border-radius: 10px;
    border: 1px solid black;
  }

  .review-width {
    margin-left: 30vw;
  }

  .fa-star {
    color: #ffd055;
  }

  .showcase {
    margin-top: 1rem;
    width: 35vw !important;
    height: 20vh !important;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .move-right {
    margin-left: 42vw !important;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    .showcase {
      margin-top: 1rem;
      width: 95vw !important;
      height: 10rem !important;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    .review-width {
      margin-left: 0vw;
    }

    .move-right {
      margin-left: 20vw !important;
    }
  }
</style>