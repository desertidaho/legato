<template>
  <div class="container-fluid venue-profile text-left mt-3">
    <img class="profile-pic" :src="profile.image" alt="Profile photo"><i @click="editImage = !editImage"
      class=" icon-toggle fas fa-pencil-alt"></i><input v-if="editImage" type="text"
      placeholder="Paste link to new image" v-model="newProfile.image">
    <hr>
    <p>Venue name: &nbsp<span>{{profile.venueName}}</span><input v-if="editName" type="text"
        placeholder="Change name..." v-model="newProfile.venueName"><i @click="editName = !editName"
        class=" icon-toggle fas fa-pencil-alt"></i></p>
    <hr>
    <p>Maximum occupancy: &nbsp<span>{{profile.maxOccupancy}}</span><input v-if="editMaxOccupancy" type="number"
        placeholder="Change number..." v-model="newProfile.occupancy"><i @click="editMaxOccupancy = !editMaxOccupancy"
        class="fas fa-pencil-alt"></i>
    </p>
    <hr>
    <p>Genre that best describes you: &nbsp<span>{{profile.venueStyle}}</span>
      <!-- <input v-if="editStyle" type="text"
        placeholder="Later a dropdown"><i @click="editStyle = !editStyle" class="fas fa-pencil-alt"></i></p> -->

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Select genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-model="newProfile.venueStyle">
          <a class="dropdown-item" href="#">Ballroom</a>
          <a class="dropdown-item" href="#">Theater</a>
          <a class="dropdown-item" href="#">Stadium</a>
          <a class="dropdown-item" href="#">Bar</a>
          <a class="dropdown-item" href="#">Dance club</a>
          <a class="dropdown-item" href="#">Restaurant</a>
          <a class="dropdown-item" href="#">Outdoor venue</a>
          <a class="dropdown-item" href="#">Coffee house</a>
          <a class="dropdown-item" href="#">Other</a>
        </div>
      </div>
      <hr>

      <p>Your city: &nbsp<span>{{profile.city}}</span><input v-if="editCity" type="text" placeholder="Edit city"
          v-model="newProfile.city"><i @click="editCity = !editCity" class="fas fa-pencil-alt"></i></p>
      <hr>
      <p>Your state: &nbsp<span>{{profile.state}}</span><input v-if="editState" type="text" placeholder="Edit state"
          v-model="newProfile.state"><i @click="editState = !editState" class="fas fa-pencil-alt"></i></p>
      <hr>
      <p>Equipment you provide: &nbsp<span>{{profile.equipmentDetails}}</span><input v-if="editGear" type="text"
          placeholder="Edit gear..." v-model="newProfile.artistName"><i @click="editGear = !editGear"
          class="fas fa-pencil-alt"></i></p>
      <hr>
      <p>Describe your venue: &nbsp<span>{{profile.venueDescription}}</span><input v-if="editDescription" type="text"
          placeholder="Edit venue description..." v-model="newProfile.equipmentDetails"><i
          @click="editDescription = !editDescription" class="fas fa-pencil-alt"></i></p>
      <hr>
      <p>Additional details about your venue: &nbsp<span>{{profile.venueDetails}}</span><input v-if="editDetails"
          type="text" placeholder="Edit additional details..." v-model="newProfile.venueDetails"><i
          @click="editDetails = !editDetails" class="fas fa-pencil-alt"></i></p>
      <hr>
      <p>Social media: <i @click="editSocialMedia = !editSocialMedia" class="fas icon-toggle fa-pencil-alt"></i><br
          v-if="editSocialMedia"><span v-if="profile.twitter || editSocialMedia">Twitter:
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
        <p>Phone: &nbsp<span>{{profile.phone}}</span><input v-if="editPhone" type="tel" placeholder="(999) 999-9999"
            v-model="newProfile.phone"><i @click="editPhone = !editPhone" class="fas icon-toggle fa-pencil-alt"></i></p>
        <hr>
        <!-- <div    v-for="review in profile.reviews">
      card with small image, name to the left of small image, text to the left of the small image, and stars rating below the text -->


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
        <hr>
        <button v-if="changes" class="btn btn-dark mb-3" @click="editProfile">Save changes</button>
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
        editStyle: false,
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
    border-radius: 100px;
    height: 150px;
    width: 150px;
  }

  .icon-toggle:hover {
    cursor: pointer;
  }
</style>