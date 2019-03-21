<template>
  <div class="container-fluid artist-profile text-left mt-3">
    <img class="profile-pic" :src="profile.image" alt="Profile photo">
    <p>Artist/group name: &nbsp<span>{{profile.artistName}}</span><input v-if="editName" type="text"
        placeholder="Change name..." v-model="newProfile.artistName"><i @click="editName = !editName"
        class="fas fa-pencil-alt"></i></p>
    <p>How many people in this act: &nbsp<span>{{profile.actSize}}</span><input v-if="editSize" type="number"
        placeholder="Change number..." v-model="newProfile.actSize"><i @click="editSize = !editSize"
        class="fas fa-pencil-alt"></i></p>
    <p>Genre that best describes you: &nbsp<span>{{profile.genre}}</span><input v-if="editGenre" type="text"
        placeholder="Later a dropdown" v-model="newProfile.genre"><i @click="editGenre = !editGenre"
        class="fas fa-pencil-alt"></i></p>
    <p>Style that best describes your act: &nbsp<span>{{profile.style}}</span><input v-if="editStyle" type="text"
        placeholder="Edit style..." v-model="newProfile.style"><i @click="editStyle = !editStyle"
        class="fas fa-pencil-alt"></i></p>
    <p>Your primary area/city (home-base): &nbsp<span>{{profile.homeBase}}</span><input v-if="editLocation" type="text"
        placeholder="Change location..." v-model="newProfile.homeBase"><i @click="editLocation = !editLocation"
        class="fas fa-pencil-alt"></i></p>
    <p>Equipment you have: &nbsp<span>{{profile.equipmentDetails}}</span><input v-if="editGear" type="text"
        placeholder="Edit gear..." v-model="newProfile.equipmentDetails"><i @click="editGear = !editGear"
        class="fas fa-pencil-alt"></i></p>
    <p>Performance needs: &nbsp<span>{{profile.performanceNeeds}}</span><input v-if="editNeeds" type="text"
        placeholder="Any special requirements for your act?" v-model="newProfile.performanceNeeds"><i
        @click="editNeeds = !editNeeds" class="fas fa-pencil-alt"></i></p>
    <!-- <p>Social media-- <span v-if="profile.twitter">Twitter: {{profile.twitter}}</span><br><span
        v-if="profile.facebook">Facebook: {{profile.facebook}}</span><span v-if="profile.instagram">Instagram:
        {{profile.instagram}}</span><span v-if="profile.linkedIn">LinkedIn: {{profile.linkedIn}}</span> -->
    <p>Phone: &nbsp<span>{{profile.phone}}</span><input v-if="editPhone" type="tel" placeholder="(999) 999-9999"
        v-model="newProfile.phone"><i @click="editPhone = !editPhone" class="fas fa-pencil-alt"></i></p>
    <!-- <div v-for="review in profile.reviews">
      card with small image, name to the left of small image, text to the left of the small image, and stars rating below the text -->
    <!-- let reviews = new Schema({
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
        editName: false,
        editSize: false,
        editGenre: false,
        editImage: false,
        editStyle: false,
        editLocation: false,
        editGear: false,
        editNeeds: false,
        editPhone: false,
        saveChanges: false
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
        //dispatch
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
</style>