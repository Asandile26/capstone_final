<template>
    <div>
      <a @click.prevent="logout" href="#">Logout</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logout',
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push({ name: 'login' });
      },
    },
  };
  </script>
  
<style lang="">
    
</style>