<template>
  <div class="login text-center">
    <div>
      <!-- TESTING BUTTONS BELOW. DELETE BEFORE FINAL PUSH
      <router-link to="/home"><button class="btn m-3 btn-primary shadow">
          Go to home view</button></router-link>
      <router-link to="/dashboard"><button class=" btn m-3 btn-primary shadow">
          Go to dashboard view</button></router-link> -->
<<<<<<< HEAD
      <h1 class="m-3">Legato</h1>
=======
      <h1 class="p-3 title mb-0">Legato</h1>
>>>>>>> 90b15ae1929d9906ed94ebdae03b7a20bf486f92
      <carousel></carousel>
      <form v-if="loginForm" @submit.prevent="loginUser" class="mt-3">
        <div class="form-group text-left">
          <!-- <label>Email:</label> -->
          <input class="form-control shadow" type="email" v-model="creds.email" placeholder="Email...">
        </div>
        <div class="form-group text-left">
          <!-- <label>Password:</label> -->
          <input class="form-control shadow" type="password" v-model="creds.password" placeholder="Password...">
        </div>
        <button class="btn btn-dark shadow" type="submit">Log In</button>
      </form>
      <form v-else @submit.prevent="register" class="mt-3">
        <div class="form-group text-left">
          <input class="form-control shadow" type="text" v-model="newUser.userName" placeholder="Enter your username..."
            required>
        </div>
        <div class="form-group text-left">
          <input class="form-control shadow" type="email" v-model="newUser.email" placeholder="Enter your email..."
            required>
        </div>
        <div class=" form-group text-left">

          <input class="form-control shadow" type="password" v-model="newUser.password"
            placeholder="Create a password...">
        </div>
        <div class="form-group text-left">
          <input class="ml-1" type="radio" name="artist" :value="true" v-model="newUser.artist" checked>
          <label>&nbspArtist &nbsp</label>
          <input type="radio" name="artist" v-model="newUser.artist" :value="false">
          <label>&nbspVenue</label>
        </div>
        <button :class="{disabled: isDisabled}" :disabled="isDisabled" class="button-margin btn btn-dark shadow"
          type="submit">Create
          account</button>
      </form>
      <div class="action mt-2" @click="loginForm = !loginForm">
        <p v-if="loginForm">Sign up for Legato today.</p>
        <p v-else>Already have an account? Click here to log in.</p>
      </div>
    </div>
    <br><br>
    <h2>Recent connections:</h2>
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
      isDisabled() {
        if (this.newUser.password.length > 5) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
        this.loginForm = !this.loginForm
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
  .action {
    cursor: pointer;
  }

  form {
    width: 90vw;
    margin: auto;
  }

  .button-margin {
    margin-top: -10px;
    margin-bottom: 10px
  }
</style>