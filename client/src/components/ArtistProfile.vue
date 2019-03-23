<template>
  <div class="container-fluid artist-profile text-left mt-3">
    <img class="profile-pic" :src="profile.image" alt="Profile photo"><i @click="editImage = !editImage"
      class=" icon-toggle fas fa-pencil-alt"></i><input v-if="editImage" type="text"
      placeholder="Paste link to new image" v-model="newProfile.image">
    <p class="question">Artist/group name &NonBreakingSpace;<input v-if="editName" type="text"
        placeholder="Change name..." v-model="newProfile.artistName"><i @click="editName = !editName"
        class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.artistName}}</span></p>
    <hr>
    <p class="question">How many people in this act &nbsp<input v-if="editSize" type="number"
        placeholder="Change number..." v-model="newProfile.actSize"><i @click="editSize = !editSize"
        class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.actSize}}</span></p>
    <hr>
    <p class="question">Genre that best describes you &nbsp
      <select v-if="editGenre" v-model="newProfile.genre" class="btn btn-dark ml-3">
        <option class="dd-item" value="">(Select genre)</option>
        <option class="dd-item" value="Pop">Pop</option>
        <option class="dd-item" value="Jazz">Jazz</option>
        <option class="dd-item" value="Classical">Classical</option>
        <option class="dd-item" value="Rock">Rock</option>
        <option class="dd-item" value="Country">Country</option>
        <option class="dd-item" value="Hip-Hop">Hip-Hop</option>
        <option class="dd-item" value="Electrical">Electrical</option>
        <option class="dd-item" value="World music">World music</option>
        <option class="dd-item" value="Heavy metal">Heavy metal</option>
        <option class="dd-item" value="Folk">Folk</option>
        <option class="dd-item" value="Reggae">Reggae</option>
        <option class="dd-item" value="Rhythm & blues">Rhythm & blues</option>
      </select>
      <i @click="editGenre = !editGenre" class="fas icon-toggle fa-pencil-alt"></i><br><span
        class="answer">{{profile.genre}}</span>
    </p>
    <hr>
    <p class="question">Style that best describes your act &nbsp<input v-if="editStyle" type="text"
        placeholder="Edit style..." v-model="newProfile.styleMusic"><i @click="editStyle = !editStyle"
        class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.styleMusic}}</span></p>
    <hr>
    <p class="question">Your primary area/city (home-base) &nbsp<input v-if="editLocation" type="text"
        placeholder="Change location..." v-model="newProfile.homeBase"><i @click="editLocation = !editLocation"
        class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.homeBase}}</span></p>
    <hr>
    <p class="question">Equipment you have &nbsp<input v-if="editGear" type="text" placeholder="Edit gear..."
        v-model="newProfile.equipmentDetails"><i @click="editGear = !editGear"
        class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.equipmentDetails}}</span></p>
    <hr>
    <p class="question">Performance needs &nbsp<input v-if="editNeeds" type="text"
        placeholder="Any special requirements for your act?" v-model="newProfile.performanceNeeds"><i
        @click="editNeeds = !editNeeds" class="fas icon-toggle fa-pencil-alt"></i><br><span
        class="answer">{{profile.performanceNeeds}}</span></p>
    <hr>
    <!-- CHANGE ALL TO ANCHOR TAGS -->
    <p class="question">Social media <i @click="editSocialMedia = !editSocialMedia"
        class="fas icon-toggle fa-pencil-alt"></i><br v-if="editSocialMedia"><br><br><span class="answer"
        v-if="profile.twitter || editSocialMedia">Twitter:
        {{profile.twitter}}</span><input v-if="editSocialMedia" type="text" placeholder="Twitter URL"
        v-model="newProfile.twitter"><br v-if="editSocialMedia"><br><span class="answer"
        v-if="profile.facebook || editSocialMedia">Facebook:
        <a :href="profile.facebook">{{profile.facebook}}</a></span><input v-if="editSocialMedia" type="text"
        placeholder="Facebook URL" v-model="newProfile.facebook"><br v-if="editSocialMedia"><br><span class="answer"
        v-if="profile.insgram || editSocialMedia">Instagram:
        {{profile.instagram}}</span><input v-if="editSocialMedia" type="text" placeholder="Instagram URL"
        v-model="newProfile.instagram"><br v-if="editSocialMedia"><br><span class="answer"
        v-if="profile.linkedIn || editSocialMedia">LinkedIn:
        {{profile.linkedIn}}</span><input v-if="editSocialMedia" type="text" placeholder="LinkedIn URL"
        v-model="newProfile.linkedIn"><br v-if="editSocialMedia">
      <hr>
      <p class="question">Phone &nbsp<input v-if="editPhone" type="tel" placeholder="(999) 999-9999"
          v-model="newProfile.phone"><i @click="editPhone = !editPhone"
          class="fas icon-toggle fa-pencil-alt"></i><br><span class="answer">{{profile.phone}}</span></p>

      <div v-for="review in profile.reviewsReceived">
        {{review}}
        <!--Reviews received go here-->
      </div>
      <div v-for="review in profile.reviewsGiven">
        {{review}}
        <!--Reviews given go here-->
      </div>
      <!--THIS COMMENT FOR THE V-FOR LOOP ABOVE: card with small image, name to the left of small image, text to the left of the small image, and stars rating below the text -->
      <!-- REVIEW SUBSCHEMA, SHOULD HELP IN WRITING THE V-FOR LOOP ABOVE. COULD BE UPDATED, MAYBE THE SUBSCHEMA HAS NEW PROPERTIES (IMG)
         let reviews = new Schema({
        stars: { type: Number, required: true },
        feedback: { type: String, required: false },
        userId: { type: ObjectId, ref: 'User', required: true },
        !!!!!artistId!!/!!venueId!!!!!: { type: ObjectId, ref: 'Artist', required: true }
      }) -->
      <button v-if="changes" class="btn btn-dark mb-3" @click="editProfile">Save changes</button>
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
        },
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
        editSocialMedia: false
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
      }
    },
    components: {},
    filters: {}
  }
</script>


<style>
  .profile-pic {
    border-radius: 100px;
    height: 150px;
    width: 150px;
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
</style>