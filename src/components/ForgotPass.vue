<template lang="">
  <div class="forgot">
    <form
      action="https://formspree.io/f/mwkjqqzd"
      method="POST"
      @submit.prevent="onForgot"
    >
      <h2>FORGOT PASSWORD</h2>
      <input type="email" name="email" class="forgot-input" placeholder="Your e-mail">
    <br>
      <button type="submit-btn">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ForgotPass",
  data() {
    return {
      User: {
        email: null,
      },
    };
  },
  methods: {
    onForgot() {},
  },
};
</script>
<style scoped>

</style>
