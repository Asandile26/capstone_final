<template lang="">
  <div class="footer container-fluid">
    <div>
    <h2>Copyright &copy; 2023</h2>
    </div>
     
    <div class="socials">
      <h2>social media</h2>
      <ul>
        <li>
          <a href="https://m.facebook.com/100090013194612/"
            ><i class="bi bi-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/Asandile26"
            ><i class="bi bi-github"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/LA_Nator21"
            ><i class="bi bi-twitter"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #245953;
  width: 100%;
}

.socials {
  justify-content: flex-start;
  text-decoration: none;
}
</style>
