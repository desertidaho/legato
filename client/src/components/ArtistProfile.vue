<template>
  <div class="container-fluid artist-profile text-left mt-3">
    <div class="row">
      <div class="d-flex col-12 justify-content-center mt-2">
        <img class="profile-pic" :src="profile.image" alt="Profile photo">
        <i v-if="edit" @click="editImage = !editImage"
          class="d-flex justify-content-end align-items-end icon-toggle fas fa-pencil-alt" title="Edit image"></i><input
          class="image-edit" v-if="editImage" type="text" placeholder="Paste link to new image"
          v-model="newProfile.image">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <p class="question">Artist/group name &NonBreakingSpace;<input v-if="editName" type="text"
            placeholder="Change name..." v-model="newProfile.artistName"><i v-if="edit" @click="editName = !editName"
            class="fas icon-toggle fa-pencil-alt" title="Edit name"></i><br><span
            class="answer">{{profile.artistName}}</span>
        </p>
        <hr>
        <p class="question">Number of people &nbsp<input v-if="editSize" type="number" placeholder="Change number..."
            v-model="newProfile.actSize"><i v-if="edit" @click="editSize = !editSize"
            class="fas icon-toggle fa-pencil-alt" title="Edit number"></i><br><span
            class="answer">{{profile.actSize}}</span></p>
        <hr>
        <p class="question">Genre that best describes you &nbsp
          <select v-if="editGenre" v-model="newProfile.genre" class="btn btn-dark ml-3">
            <option class="dd-item" value="" selected disabled hidden>(Select genre)</option>
            <option class="dd-item" value="Pop">Pop</option>
            <option class="dd-item" value="Jazz">Jazz</option>
            <option class="dd-item" value="Classical">Classical</option>
            <option class="dd-item" value="Rock">Rock</option>
            <option class="dd-item" value="Country">Country</option>
            <option class="dd-item" value="Hip-Hop">Hip-Hop</option>
            <option class="dd-item" value="Electronic">Electronic</option>
            <option class="dd-item" value="World music">World music</option>
            <option class="dd-item" value="Heavy metal">Heavy metal</option>
            <option class="dd-item" value="Folk">Folk</option>
            <option class="dd-item" value="Reggae">Reggae</option>
            <option class="dd-item" value="Rhythm & blues">Rhythm & blues</option>
          </select>
          <i v-if="edit" @click="editGenre = !editGenre" class="fas icon-toggle fa-pencil-alt"
            title="Edit genre"></i><br><span class="answer">{{profile.genre}}</span>
        </p>
        <hr>
        <p class="question">Style that best describes your act &nbsp<input v-if="editStyle" type="text"
            placeholder="Edit style..." v-model="newProfile.styleMusic"><i v-if="edit" @click="editStyle = !editStyle"
            class="fas icon-toggle fa-pencil-alt" title="Edit style"></i><br><span
            class="answer">{{profile.styleMusic}}</span>
        </p>
        <p class="question">Youtube link &nbsp<input v-if="editSize" type="text" placeholder="Youtube URL..."
            v-model="newProfile.youtube"><i v-if="edit" @click="editYoutube = !editYoutube"
            class="fas icon-toggle fa-pencil-alt" title="Edit youtube"></i><br><span
            class="answer">{{profile.youtube}}</span></p>
        <hr>
        <p class="question">Your primary area/city (home-base) &nbsp<input v-if="editLocation" type="text"
            placeholder="Change location..." v-model="newProfile.homeBase"><i v-if="edit"
            @click="editLocation = !editLocation" class="fas icon-toggle fa-pencil-alt" title="Edit city"></i><br><span
            class="answer">{{profile.homeBase}}</span></p>
        <hr>
        <p class="question">Equipment you have &nbsp<input v-if="editGear" type="text" placeholder="Edit gear..."
            v-model="newProfile.equipmentDetails"><i v-if="edit" @click="editGear = !editGear"
            class="fas icon-toggle fa-pencil-alt" title="Edit gear"></i><br><span
            class="answer">{{profile.equipmentDetails}}</span></p>
        <hr>
        <p class="question">Performance needs &nbsp<input v-if="editNeeds" type="text"
            placeholder="Any special requirements for your act?" v-model="newProfile.performanceNeeds"><i v-if="edit"
            @click="editNeeds = !editNeeds" class="fas icon-toggle fa-pencil-alt"
            title="Edit performance needs"></i><br><span class="answer">{{profile.performanceNeeds}}</span></p>
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
          <p class="question">Showcase your act. Select an image that shows you in action. <i v-if="edit"
              @click="editImageShowcase = !editImageShowcase" class="fas icon-toggle fa-pencil-alt"
              title="Edit Image Showcase"></i><br v-if="editImageShowcase"><br><span class="answer"
              v-if="profile.imageShowcase || editImageShowcase">
              <img height="50px" width="auto" :src="profile.imageShowcase"></span><input v-if="editImageShowcase"
              type="text" placeholder="image URL" v-model="newProfile.imageShowcase"><br v-if="editImageShowcase"><br>
            <hr>
            <p class="question mb-4">Phone &nbsp<input v-if="editPhone" type="tel" placeholder="(xxx) xxx-xxxx"
                v-model="newProfile.phone"><i v-if="edit" @click="editPhone = !editPhone"
                class="fas icon-toggle fa-pencil-alt" title="Edit phone"></i><br><span
                class="answer">{{profile.phone}}</span></p>
            <button v-if="changes" class="btn btn-dark mb-4" @click="editProfile">Save changes</button><button
              @click="edit = !edit" class="btn btn-secondary float-right mb-3 mr-1">Edit Profile</button>
      </div>
    </div>
    <div class="row bg-warning">
      <div class="col-11">
        <div class="row mt-3 py-3 mb-0">
          <h4 class="ml-3">Reviews received:</h4>
          <div class="col-12 reviews shadow mb-2 mx-3" v-for="review in profile.reviewsReceived">
            <p class="text-left ml-3 mt-2">
              {{review.venueFrom || review.artistFrom}}:
              <span><i v-if="review.stars == 1" class="fas fa-star"></i></span>
              <span v-if="review.stars == 2"><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i></span>
              <span v-if="review.stars == 4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 5"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <br>{{review.feedback}}
            </p>
          </div>
        </div>
        <div class="row mt-0 pt-3 pb-5">
          <h4 class="ml-3">Reviews given:</h4>
          <div class="col-12 reviews shadow mb-2 mx-3" v-for="review in profile.reviewsGiven">
            <p class="text-left ml-3 mt-2">
              {{review.artistTo || review.venueTo}}:
              <span><i v-if="review.stars == 1" class="fas fa-star"></i></span>
              <span v-if="review.stars == 2"><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i></span>
              <span v-if="review.stars == 4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                  class="fas fa-star"></i><i class="fas fa-star"></i></span>
              <span v-if="review.stars == 5"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
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
    name: 'artistProfile',
    props: [],
    mounted() {
    },
    data() {
      return {
        newProfile: {
          artistName: '',
          actSize: 0,
          genre: "",
          youtube: "",
          image: "",
          styleMusic: "",
          homeBase: "",
          equipmentDetails: "",
          performanceNeeds: "",
          twitter: "",
          facebook: "",
          instagram: "",
          linkedIn: "",
          phone: "",
          imageShowcase: ""
        },
        edit: false,
        editImage: false,
        editName: false,
        editGenre: false,
        editSize: false,
        editImage: false,
        editStyle: false,
        editLocation: false,
        editGear: false,
        editNeeds: false,
        editPhone: false,
        saveChanges: false,
        editSocialMedia: false,
        editImageShowcase: false,
        editYoutube: false
      }
    },
    computed: {
      profile() {
        return this.$store.state.activeArtist
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
          else {
            theBool = false
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
        let type = 'artist'
        let payload = {
          endpoint: type,
          _id: this.profile._id, //Change to userId if it doesn't work.
          data: updated,
          artist: true,
          userId: this.user._id
        }
        this.$store.dispatch("editProfile", payload)
        this.newProfile = {
          artistName: '',
          actSize: NaN,
          genre: "",
          image: "",
          styleMusic: "",
          homeBase: "",
          equipmentDetails: "",
          performanceNeeds: "",
          twitter: "",
          facebook: "",
          instagram: "",
          linkedIn: "",
          phone: ""
        }
        this.edit = false
        this.editImage = false
        this.editName = false
        this.editGenre = false
        this.editSize = false
        this.editImage = false
        this.editStyle = false
        this.editLocation = false
        this.editGear = false
        this.editNeeds = false
        this.editPhone = false
        this.saveChanges = false
        this.editSocialMedia = false
        this.editImageShowcase = false
        this.editYoutube = false
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

  .image-edit {
    height: 20%;
    margin-top: 32%;
    margin-left: 5px;
  }

  .dd-item:hover {
    cursor: pointer;
    background-color: lightgrey !important;
    color: black !important;
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

  .review-weight {
    font-weight: 500;
  }

  .reviews {
    background-color: rgb(230, 228, 228);
    background: linear-gradient(to right, rgb(175, 174, 174) 60%, #dbdada);
    border-radius: 10px;
    margin: 0.3rem 0;
    border: 1px solid black;
  }

  .fa-star {
    color: #ffd055;
  }
</style>