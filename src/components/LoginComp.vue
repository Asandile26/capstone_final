<template>
  <SpinnerComp class="spinner" v-if="isLoading"/>
  <div class="login d-flex justify-content-center">
    <form class="form" @submit.prevent="onLogIn">
      <p>Login</p>
      <div class="group">
        <input
          required="true"
          class="main-input"
          type="text"
          v-model="payload.emailAdd"
        />
        <span class="highlight-span"></span>
        <label class="lebal-email">Email</label>
      </div>
      <div class="container-1">
        <div class="group">
          <input
            required="true"
            class="main-input"
            type="text"
            v-model="payload.userPass"
          />
          <span class="highlight-span"></span>
          <label class="lebal-email">password</label>
        </div>
        <div class="inputF">
          <label for=""><input type="checkbox" />Remember me: </label>
          <a href=""
            ><router-link to="/forgot">Forgot Password?</router-link></a
          >
        </div>
        <br /><br />
      </div>
      <button class="submit">submit</button>
      <div class="register">
        <p>
          Don't have an account?
          <a href=""><router-link to="/register">Register</router-link> </a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      }
    };
  },
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  methods: {
    async onLogIn() {
      try {
        await this.login();
        alert("User is successfully logged in");
        this.$router.push("/home");
      } catch (error) {
        alert("Incorrect login details");
      }
    },
    login() {
      console.log("Return:", this.payload);
      this.isLoading = true;
      this.$store.dispatch("login", this.payload)
      .then(()=> {
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading =false;
      })
      // return this.$store.dispatch("login", this.payload);
    },
  },
};
</script>
<style scoped>
*,
::before,
::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.group {
  position: relative;
}

.form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 1px solid white;
  padding: 120px 40px;
  padding-top: 50px;
  padding-bottom: 90px;
  padding-right: 40px;
  padding-left: 40px;
  background-color: #D8D8D8;
  border-radius: 20px;
  position: relative;
}

.form p {
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: white;
}

.container-1 {
  padding-top: 30px;
  padding-bottom: 40px;
}

.main-input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 185px;
  border: none;
  border-bottom: 1px solid #6c6c6c;
  background: transparent;
  color: #ffffff;
}

.main-input:focus {
  outline: none;
  border-bottom-color: #D8D8D8;
}

.lebal-email {
  color: #999999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.main-input:focus ~ .lebal-email,
.main-input:valid ~ .lebal-email {
  top: -20px;
  font-size: 14px;
  color: #D8D8D8;
}

.highlight-span {
  position: absolute;
  height: 60%;
  width: 0px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.main-input:focus ~ .highlight-span {
  -webkit-animation: input-focus 0.3s ease;
  animation: input-focus 0.3s ease;
}

@keyframes input-focus {
  from {
    background: #42ff1c;
  }

  to {
    width: 185px;
  }
}

.submit {
  margin-top: 1.2rem;
  padding: 10px 20px;
  border-radius: 10px;
}
.login{
  background-color: rgb(117, 190 ,218 , 0.5);
  padding-top: 50px;
}
</style>
