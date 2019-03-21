<template>
  <div class="container-fluid venue-profile text-left mt-3">
    <img v-if="profile" class="profile-pic" :src="profile.image" alt="Profile photo"><img v-else class="profile-pic"
      src="../assets/default-profile.png">
    <p>Venue name: &nbsp<span v-if="profile">{{profile.venueName}}</span><input v-else-if="editName" type="text"
        placeholder="Change name..."><i @click="editName = !editName" class="fas fa-pencil-alt"></i></p>
    <p>Maximum occupancy: &nbsp<span v-if="profile">{{profile.maxOccupancy}}</span><input v-else-if="editMaxOccupancy"
        type="number" placeholder="Change number..."><i @click="editMaxOccupancy = !editMaxOccupancy"
        class="fas fa-pencil-alt"></i></p>
    <p>Genre that best describes you: &nbsp<span v-if="profile">{{profile.venueStyle}}</span><input
        v-else-if="editStyle" type="text" placeholder="Later a dropdown"><i @click="editStyle = !editStyle"
        class="fas fa-pencil-alt"></i></p>

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Select genre
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

    <p>Your city: &nbsp<span v-if="profile">{{profile.city}}</span><input v-else-if="editCity" type="text"
        placeholder="Edit city"><i @click="editCity = !editCity" class="fas fa-pencil-alt"></i></p>
    <p>Your state: &nbsp<span v-if="profile">{{profile.state}}</span><input v-else-if="editState" type="text"
        placeholder="Edit state"><i @click="editState = !editState" class="fas fa-pencil-alt"></i></p>
    <p>Equipment you provide: &nbsp<span v-if="profile">{{profile.equipmentDetails}}</span><input v-else-if="editGear"
        type="text" placeholder="Edit gear..."><i @click="editGear = !editGear" class="fas fa-pencil-alt"></i></p>
    <p>Describe your venue: &nbsp<span v-if="profile">{{profile.venueDescription}}</span><input
        v-else-if="editDescription" type="text" placeholder="Edit venue description..."><i
        @click="editDescription = !editDescription" class="fas fa-pencil-alt"></i></p>
    <p>Additional details about your venue: &nbsp<span v-if="profile">{{profile.venueDetails}}</span><input
        v-else-if="editDetails" type="text" placeholder="Edit additional details..."><i
        @click="editDetails = !editDetails" class="fas fa-pencil-alt"></i></p>
    <!-- <p v-if="profile">Social media-- <span v-if="profile.twitter">Twitter: {{profile.twitter}}</span><br><span
        v-if="profile.facebook">Facebook: {{profile.facebook}}</span><span v-if="profile.instagram">Instagram:
        {{profile.instagram}}</span><span v-if="profile.linkedIn">LinkedIn: {{profile.linkedIn}}</span> -->
    <p>Phone: &nbsp<span v-if="profile">{{profile.phone}}</span><input v-else-if="editPhone" type="tel"
        placeholder="Phone number: 9999999999"><i @click="editPhone = !editPhone" class="fas fa-pencil-alt"></i></p>
    <!-- <div v-if="profile" v-for="review in profile.reviews">
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

    <button class="btn btn-dark mb-3">Save changes</button>
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
        editPhone: false,
        editNeeds: false
      }
    },
    computed: {
      profile() {
        return this.$store.state.activeVenue
      }
    },
    methods: {},
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