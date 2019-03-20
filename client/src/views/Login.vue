<template>
  <div class="container-fluid">
    <div class="login">
      <!-- TESTING BUTTONS BELOW. DELETE BEFORE FINAL PUSH -->
      <!-- <router-link to="/home"><button class="btn m-3 btn-primary shadow">
          Go to home view</button></router-link>
      <router-link to="/dashboard"><button class=" btn m-3 btn-primary shadow">
          Go to dashboard view</button></router-link> -->
      <h1>Welcome to Legato.</h1>
      <form v-if="loginForm" @submit.prevent="loginUser" class="m-4">
        <div class="form-group text-left">
          <label>Email:</label>
          <input class="form-control shadow" type="email" v-model="creds.email" placeholder="Email...">
        </div>
        <div class="form-group text-left">
          <label>Password:</label>
          <input class="form-control shadow" type="password" v-model="creds.password" placeholder="Password...">
        </div>
        <button class="btn btn-primary shadow" type="submit">Login</button>
      </form>
      <form v-else @submit.prevent="register">
        <div class="form-group text-left">
          <label>Enter your username:</label>
          <input class="form-control shadow" type="text" v-model="newUser.userName" placeholder="Name...">
        </div>
        <div class="form-group text-left">
          <label>Enter your email:</label>
          <input class="form-control shadow" type="email" v-model="newUser.email" placeholder="Email...">
        </div>
        <div class=" form-group text-left">
          <label>Create a password:</label>
          <input class="form-control shadow" type="password" v-model="newUser.password" placeholder="Password...">
        </div>
        <div class="form-group text-left">
          <input type="radio" name="artist" :value="true" v-model="newUser.artist" checked>
          <label>&nbspArtist &nbsp</label>
          <input type="radio" name="artist" v-model="newUser.artist" :value="false">
          <label>&nbspVenue</label>
        </div>
        <button class="btn btn-primary shadow" type="submit" @click="loginForm= !loginForm">Create Account</button>
      </form>
      <div class="action" @click="loginForm = !loginForm">
        <p v-if="loginForm">No account? Click here to register.</p>
        <p v-else>Already have an account? Click here to login.</p>
      </div>
    </div>
    <carousel></carousel>
    <br><br>
    <h2>Most recent connections:</h2>
    <ul>
      <li>"this.artist" just connected with "this.venue" -- "this.time.now()"</li>
    </ul>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Carousel from '@/components/Carousel.vue'
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          userName: "",
          artist: true
        }
      };
    },
    computed: {
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    },
    components: {
      Carousel
    }
  };
</script>

<style>

</style>