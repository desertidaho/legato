<template>
  <div class="login text-center">
    <div class="row">
      <div class="col-12">
        <div class="title bg-dark text-warning pb-1">
          <img class="image" src="@/assets/LogotoFull.png">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <carousel></carousel>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-10 offset-1 d-flex justify-content-center">
        <form v-if="loginForm" @submit.prevent="loginUser" class="mt-3">
          <div class="form-group text-left">
            <input class="form-control shadow mb-2 ml-3" type="email" v-model="creds.email" placeholder="Email..."
              required>
            <input class="form-control shadow ml-3" type="password" v-model="creds.password" placeholder="Password..."
              required>
          </div>
          <button class="btn btn-dark shadow mt-1" type="submit">Log In</button>
        </form>
        <form v-else @submit.prevent="register" class="mt-3">
          <div class="form-group text-left">
            <input class="form-control shadow mb-2 ml-3" type="text" v-model="newUser.userName"
              placeholder="Enter a username..." required>
            <input class="form-control shadow mb-2 ml-3" type="email" v-model="newUser.email"
              placeholder="Enter your email..." required>
            <input class="form-control shadow ml-3" type="password" v-model="newUser.password"
              placeholder="Create a password...">
          </div>
          <div class="form-group text-center">
            <input class="" type="radio" name="artist" :value="true" v-model="newUser.artist" checked>
            <label class="ml-2">Artist</label>
            <input class="ml-4" type="radio" name="artist" v-model="newUser.artist" :value="false">
            <label class="ml-2">Venue</label>
          </div>
          <button :class="{disabled: isDisabled}" :disabled="isDisabled" class="btn btn-dark shadow"
            type="submit">Create
            account</button>
        </form>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col-12">
        <div class="action mt-2 mb-5" @click="loginForm = !loginForm">
          <p v-if="loginForm">Sign up for Legato today.</p>
          <p v-else>Have an account? Click here to log in.</p>
        </div>
      </div>
    </div>
    <div class="footer mt-5">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Carousel from '@/components/Carousel.vue'
  import PageFooter from '@/components/PageFooter.vue'

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
      Carousel,
      PageFooter
    }
  };
</script>

<style>
  template {
    position: relative;
    min-height: 100%;
  }

  .image {
    width: 15rem !important;
    height: auto;
  }

  .title {
    font-style: italic;
  }

  .action {
    cursor: pointer;
  }

  form {
    width: 100%;
  }

  .pics {
    width: 30vw;
    height: 15vh;
    object-fit: cover;
    border-radius: 10%;
  }

  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 20vh;
  }
</style>