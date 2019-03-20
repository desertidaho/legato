<template>
  <div class="container-fluid artist-profile text-left mt-3">
    <img v-if="profile" class="profile-pic" :src="profile.image" alt="Profile photo"><img v-else class="profile-pic"
      src="../assets/default-profile.png">
    <p>Artist/group name: &nbsp<span v-if="profile">{{profile.artistName}}</span><input v-else-if="editName" type="text"
        placeholder="Change name..."><i @click="editName = !editName" class="fas fa-pencil-alt"></i></p>
    <p>How many people in this act: &nbsp<span v-if="profile">{{profile.actSize}}</span><input v-else-if="editSize"
        type="number" placeholder="Change number..."><i @click="editSize = !editSize" class="fas fa-pencil-alt"></i></p>
    <p>Genre that best describes you: &nbsp<span v-if="profile">{{profile.genre}}</span><input v-else-if="editGenre"
        type="text" placeholder="Later a dropdown"><i @click="editGenre = !editGenre" class="fas fa-pencil-alt"></i></p>
    <p>Style that best describes your act: &nbsp<span v-if="profile">{{profile.style}}</span><input
        v-else-if="editStyle" type="text" placeholder="Edit style..."><i @click="editStyle = !editStyle"
        class="fas fa-pencil-alt"></i></p>
    <p>Your primary area/city (home-base): &nbsp<span v-if="profile">{{profile.homeBase}}</span><input
        v-else-if="editLocation" type="text" placeholder="Change location..."><i @click="editLocation = !editLocation"
        class="fas fa-pencil-alt"></i></p>
    <p>Equipment you have: &nbsp<span v-if="profile">{{profile.equipmentDetails}}</span><input v-else-if="editGear"
        type="text" placeholder="Edit gear..."><i @click="editGear = !editGear" class="fas fa-pencil-alt"></i></p>
    <p>Performance needs: &nbsp<span v-if="profile">{{profile.performanceNeeds}}</span><i
        @click="editNeeds = !editNeeds" class="fas fa-pencil-alt"></i></p>
    <!-- <p v-if="profile">Social media-- <span v-if="profile.twitter">Twitter: {{profile.twitter}}</span><br><span
        v-if="profile.facebook">Facebook: {{profile.facebook}}</span><span v-if="profile.instagram">Instagram:
        {{profile.instagram}}</span><span v-if="profile.linkedIn">LinkedIn: {{profile.linkedIn}}</span> -->
    <p>Phone: &nbsp<span v-if="profile">{{profile.phone}}</span><input v-else-if="editPhone" type="tel"
        placeholder="Phone number: 9999999999"><i @click="editPhone = !editPhone" class="fas fa-pencil-alt"></i></p>
    <!-- <div v-if="profile" v-for="review in profile.reviews">
      card with small image, name to the left of small image, text to the left of the small image, and stars rating below the text -->
    <!-- let reviews = new Schema({
        stars: { type: Number, required: true },
        feedback: { type: String, required: false },
        userId: { type: ObjectId, ref: 'User', required: true },
        !!!!!artistId!!/!!venueId!!!!!: { type: ObjectId, ref: 'Artist', required: true }
      }) -->
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
          artistName: "Artist Name",
          actSize: 1,
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
        editPhone: false
      }
    },
    computed: {
      profile() {
        return this.$store.state.activeArtist
      }
    },
    methods: {
      editProfile() {
        let changes = ''
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