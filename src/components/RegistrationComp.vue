<template lang="">
  <SpinnerComp class="spinner" v-if="isLoading"/>
  <div class="Registration d-flex justify-content-center">
    <div class="card">
      <div class="card-header">
        <div class="text-header">Register</div>
      </div>
      <div class="card-body">
        <form @submit.prevent="onRegister">
          <div class="form-group">
            <label for="username">First Name:</label>
            <input
              required=""
              class="form-control"
              name="username"
              id="username"
              type="text"
              v-model="payload.firstName"
            />
          </div>
          <div class="form-group">
            <label for="username">Last Name:</label>
            <input
              required=""
              class="form-control"
              name="username"
              id="username"
              type="text"
              v-model="payload.lastName"
            />
          </div>
          <div class="form-group d-flex g-10px">
            <label for="Gender">Gender:</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              v-model="payload.gender"
            />
            <label for="male">Male</label><br />
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              v-model="payload.gender"
            />
            <label for="female">Female</label><br />
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              v-model="payload.gender"
            />
            <label for="other">Other</label>
          </div>
          <div class="form-group">
            <label for="number">Cell Number:</label>
            <input
              type="numbers"
              class="form-control"
              name="cellphoneNumber"
              placeholder=""
              v-model="payload.cellphoneNumber"
            />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              required=""
              class="form-control"
              name="email"
              id="email"
              type="email"
              v-model="payload.emailAdd"
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              required=""
              class="form-control"
              name="password"
              id="password"
              type="password"
              v-model="payload.userPass"
            />
          </div>
          <div class="form-group">
            <label for="userRole">userRole:</label>
            <input
              type="text"
              id="userRole"
              name="userRole"
              placeholder="User"
              required
              v-model="payload.userRole"
            />
          </div>
          <div class="form-group">
            <label for="userProfile">userProfile:</label>
            <input
              type="text"
              id="userProfile"
              name="userProfile"
              placeholder="Initial and Last name"
              required
              v-model="payload.userProfile"
            />
          </div>
          <div class="form-group">
            <label for="joinDate">joinDate:</label>
            <input
              type="text"
              id="joinDate"
              name="joinDate"
              placeholder="Enter todays date
                "
              required
              v-model="payload.joinDate"
            />
          </div>

          <input type="submit" class="btn" value="submit" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: {
    SpinnerComp
  },
  setup() {
    const payload = {
      firstName: "",
      lastName: "",
      gender: "",
      cellphoneNumber: "",
      emailAdd: "",
      userPass: "",
      userRole: "user",
      userProfile: "",
      joinDate: "",
    };
    const store = useStore();
    const signUp = (payload) => {
      store.dispatch("register", payload);
      store.dispatch("fetchUsers");
      //   console.log(payload,alert('user successfully registered'));

      console.log(useStore);
    };
    const userMsg = computed(() => store.state);
    return {
      payload,
      userMsg,
      signUp,
    };
  },
  methods: {
    onRegister() {
      // this.$store.dispatch('register', this.payload);
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
.card {
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
}

.card-header {
  background-color: #333;
  padding: 16px;
  text-align: center;
}

.card-header .text-header {
  margin: 0;
  font-size: 18px;
  color: rgb(255, 255, 255);
}

.card-body {
  padding: 16px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 1px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group input[type="number"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 12px 24px;
  margin-left: 13px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
  color: #333;
}
.Registration{
  background-color: rgb(117, 190 ,218 , 0.5);
}
</style>
