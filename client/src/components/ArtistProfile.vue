<template>
  <div class="artist-profile">
    <!-- <h3><img :src="profile.image" alt="Profile photo"></h3> -->
    <!-- image: { type: String, required: true, default: -->
    <!-- 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw' }, -->
    <h3>Artist or group name{{profile.artistName}}</h3>
    <!-- artistName: { type: String, required: true }, -->
    <h3>How many people in this act: {{profile.actSize}}</h3>
    <!-- actSize: { type: Number, required: true }, -->
    <h3>Genre that best describes you: {{profile.genre}} (will have dropdown)</h3>
    <!-- genre: { type: String, required: true }, -->
    <h3>Style that best describes your act: {{profile.style}}</h3>
    <!-- styleMusic: { type: String, required: false }, -->
    <h3>Your primary area/city (home-base): {{profile.homeBase}}</h3>
    <!-- homeBase: { type: String, required: false }, -->
    <h3>Equipment you have: {{profile.equipmentDetails}}</h3>
    <!-- equipmentDetails: { type: String, required: false }, -->
    <h3>Performance needs: {{profile.performanceNeeds}}</h3>
    <!-- performanceNeeds: { type: String, required: false }, -->
    <h3>Social media-- <span v-if="profile.twitter">Twitter: {{profile.twitter}}</span><br><span
        v-if="profile.facebook">Facebook: {{profile.facebook}}</span><span v-if="profile.instagram">Instagram:
        {{profile.instagram}}</span><span v-if="profile.linkedIn">LinkedIn: {{profile.linkedIn}}</span></h3>
    <h3>phone: {{profile.phone}}</h3>
    <!-- phone: { type: String, required: false }, -->
    <div v-for="review in profile.reviews">
      <!--card with small image, name to the left of small image, text to the left of the small image, and stars rating below the text-->
    </div>
    <!-- reviews: [reviews] -->

  </div>
</template>

<!-- let reviews = new Schema({
  stars: { type: Number, required: true },
  feedback: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  artistId: { type: ObjectId, ref: 'Artist', required: true }
}) -->


<script>
  export default {
    name: 'artistProfile',
    props: [],
    mounted() {
    },
    data() {
      return {}
    },
    computed: {
      profile() {
        return this.$store.state.profile
      }
    },
    methods: {},
    components: {},
    filters: {}
  }
</script>


<style>

</style>