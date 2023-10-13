<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Need an account? </router-link>
          </p>
          VALIDATION ERROR
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control text-control-lg"
                placeholder="Username"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control text-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control text-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>

            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
          <!-- <button @click="increseCounter">Increse counter</button>
          <span>{{ count }}</span> -->
        </div>
      </div>
    </div>
  </div>
  <!-- <mcv-register /> -->
</template>

<script>
export default {
  name: 'McvRegister',
  data() {
    console.log('data', this);
    return {
      email: '',
      password: '',
      username: '',
    };
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
  methods: {
    onSubmit() {
      console.log('submitted form');
      //   this.$store.commit('registerStart');
      this.$store
        .dispatch('register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(user => {
          this.email = '';
          this.username = '';
          this.password = '';
          this.$router.push({name: 'home'});
          console.log('successfully register user ', user);
        });
    },
    increseCounter() {
      console.log('IncreseCounter');
      this.$store.commit('increment');
    },
  },
};
</script>
