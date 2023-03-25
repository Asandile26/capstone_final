<template lang="">
  <div class="contact d-flex justify-content-center">
  <div class="contact-form">
    <span class="heading">Contact Us</span>
    <form
      action="https://formspree.io/f/mwkjqqzd"
      method="POST"
      @submit.prevent="onContact"
     class="form">
      <label for="name">Name:</label>
      <input type="text" required="" />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required=""></textarea>
      <button type="submit" >Submit</button>
    </form>
  </div>
  </div>
</template>
<script>
export default {
  name: "ContactComp",
  methods: {
    onContact() {},
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
.contact-form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.contact-form label {
  color: black;
}

.contact-form .heading {
  font-size: 24px;
  color: black;
  margin-bottom: 12px;
  font-weight: bold;
  display: block;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-bottom: 10px;
}

textarea {
  resize: none;
  height: 80px;
  width: 100%;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 5px #A084DC;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.contact-form button[type="submit"] {
  background-color: #A084DC;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.contact{
  background-color: rgb(117, 190 ,218 , 0.5);
  padding-top: 100px;
}
</style>
