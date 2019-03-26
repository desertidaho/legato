<template>
  <div class="login text-center">
    <div>
      <!-- TESTING BUTTONS BELOW. DELETE BEFORE FINAL PUSH -->
      <!-- <router-link to="/home"><button class="btn m-3 btn-primary shadow">
          Go to home view</button></router-link>
      <router-link to="/dashboard"><button class=" btn m-3 btn-primary shadow">
          Go to dashboard view</button></router-link> -->
      <h1 class="p-3 title mb-0 bg-dark text-warning">Legato</h1>
      <p class="bg-dark text-warning mb-0 pb-3">Making Music Connections</p>
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
    <div class="row">
      <div class="col-12 d-flex justify-content-around mb-4">
        <div class="col-4">
          <img class="pics"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfsXdO0cC7vOKUHMVW6jZEJGu6KagmspPlAR1fT3LgANHGNwI"
            alt="">
        </div>
        <div class="col-4 d-flex align-items-center">
          <img class="arrow ml-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ll7xEDV8zsburoZcHApc0iJQTHOvR6gQW7XJ1thiC-KLWM3c"
            alt="">
        </div>
        <div class="col-4">
          <img class="pics" id="club"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqD8l17on81nmsiGquQaiu9ru3IaO0jRNyMhgJy9JCnVL3WI9YaQ"
            alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Carousel from '@/components/Carousel.vue'

  export default {
    name: "login",
    mounted() {
    },
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
  .login {
    overflow-x: hidden !important;
  }

  .title {
    font-style: italic;
  }

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

  .pics {
    width: 30vw;
    height: 15vh;
    object-fit: cover;
    border-radius: 10%;
  }

  .arrow {
    width: 17vw;
    height: 8vh;
  }

  #club {
    margin-left: -6vw;
  }
</style>