<template lang="">
  <nav class="navbar">
    <a href="" class="logo"
      ><img
        src="https://i.postimg.cc/xjsM74YF/RUN-IT.gif"
        alt="Logo"
        width="200"
        height="60"
    /></a>
    <ul class="nav-links">
      <li class="nav-item">
        <router-link to="/">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/products">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin">Admin</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart">Cart</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile">profile</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkgray;
    padding: 10px;
}
  
.navbar .logo {
    margin-right: 30px;
}
  
.navbar .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}
  
.navbar .nav-links li {
    margin-left: 20px;
}
.nav-item a:hover {
    color: #66347F;
}
  
.navbar .nav-links li:first-child {
    margin-left: 0;
}
  
.navbar .nav-links a {
    color: white;
    text-decoration: none;
}

.navbar a:active {
    color:  #3795BD;
}
a:hover {
    transition: 1s;
    scale : 1.2;
}
  


  
@media screen and (max-width: 268px) {
.navbar .nav-links {
      display:table-column-group;
    }

    .navbar.responsive .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
    }
    
    .navbar.responsive .nav-links li {
      margin: 10px 0;
    }
    
    .navbar.responsive {
      position: absolute;
      top: 10px;
      right: 10px;
    }

  }
</style>
