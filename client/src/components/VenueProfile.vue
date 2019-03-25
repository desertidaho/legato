<template>
  <div class="container-fluid venue-profile text-left mt-3">
    <div class="row">
      <div class="d-flex col-12 justify-content-center">
        <img class="profile-pic" :src="profile.image" alt="Profile photo">
        <i @click="editImage = !editImage"
          class="d-flex justify-content-end align-items-end icon-toggle fas fa-pencil-alt"></i><input class="image-edit"
          v-if="
          editImage" type="text" placeholder="Paste link to new image" v-model="newProfile.image">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <p class="question">Venue name &nbsp<input v-if="editName" type="text" placeholder="Change name..."
            v-model="newProfile.venueName"><i @click="editName = !editName"
            class=" icon-toggle fas fa-pencil-alt"></i><br><span class="answer">{{profile.venueName}}</span></p>
        <hr>
        <p class="question">Maximum occupancy &nbsp<input v-if="editMaxOccupancy" type="number"
            placeholder="Change number..." v-model="newProfile.maxOccupancy"><i
            @click="editMaxOccupancy = !editMaxOccupancy" class="icon-toggle fas fa-pencil-alt"></i><br><span
            class="answer">{{profile.maxOccupancy}}</span>
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
        <!-- <input v-if="editStyle" type="text"
        placeholder="Later a dropdown"><i @click="editStyle = !editStyle" class="fas fa-pencil-alt"></i></p> -->

        <!-- <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Select genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span class="dd-item dropdown-item">Ballroom</span>
          <span class="dd-item dropdown-item">Theater</span>
          <span class="dd-item dropdown-item">Stadium</span>
          <span class="dd-item dropdown-item">Bar</span>
          <span class="dd-item dropdown-item">Dance club</span>
          <span class="dd-item dropdown-item">Restaurant</span>
          <span class="dd-item dropdown-item">Outdoor venue</span>
          <span class="dd-item dropdown-item">Coffee house</span>
          <span class="dd-item dropdown-item">Other</span>
        </div>
      </div> -->
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
          <p class="question mb-4">Phone &nbsp<input v-if="editPhone" type="tel" placeholder="(999) 999-9999"
              v-model="newProfile.phone"><i @click="editPhone = !editPhone"
              class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.phone}}</span></p>

          <!--SUBSCHEMA let reviews = new Schema({
        stars: { type: Number, required: true },
        feedback: { type: String, required: false },
        userId: { type: ObjectId, ref: 'User', required: true },
        !!!!!artistId!!/!!venueId!!!!!: { type: ObjectId, ref: 'Artist', required: true }
      }) -->

          <!-- let schema = new Schema({
      userId: { type: ObjectId, ref: 'User', required: true },
      venueName: { type: String, required: true },
      maxOccupancy: { type: Number, required: true },
      venueStyle: { type: String, required: true },
      image: { type: String, required: true, default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw' },
      allAges: { type: Boolean, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      equipmentDetails: { type: String, required: false },
      venueDetails: { type: String, required: false },
      venueDescription: { type: String, required: false },
      twitter: { type: String, required: false },
      facebook: { type: String, required: false },
      instagram: { type: String, required: false },
      linkedIn: { type: String, required: false },
      phone: { type: String, required: false },
      reviews: [reviews] -->
          <button v-if="changes" class="btn btn-dark mb-3" @click="editProfile">Save changes</button>
      </div>
    </div>
    <div class="row bg-warning">
      <div class="col-12">
        <div class="row mt-3 py-3 mb-0">
          <h4 class="ml-3">Reviews Given:</h4>
          <div class="col-12" v-for="review in profile.reviewsGiven">
            <p>
              <span class="review-weight"> {{review.venueTo || review.artistTo}}</span> : {{review.feedback}}
              <!--Reviews received go here-->
            </p>
          </div>
        </div>
        <div class="row mt-0 py-3">
          <h4 class="ml-3">Reviews From:</h4>
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
          phone: ""
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
        editPhone: false
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