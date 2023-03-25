<template>
 <div class="runners">
  <div class="content">
    <strong><h2>RUN IT: Chase Your Goals, Crush Your Limits!</h2>
    <p>WE MAKE SHOPPING CONVENIENT FOR YOU SO THAT YOU CAN SPEND MORE TIME RUNNING, WE BRING THE HOTTEST RUNNING CLOTHS TO YOU SO THAT YOU CAN BURN CALORIES IN  STYLE.</p></strong>
    <router-link to="/products"><button class="btn btn-dark w-10">SHOP NOW</button></router-link>
    
  </div>
  <video autoplay loop muted playsinline class="Video">
    <source src="../assets/run.mp4" type="video/mp4">
  </video>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Video{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.runners {
  position: relative;
  height: 100vh; /* optional - sets the height to the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  z-index: 1;
  color: white;
}

</style>
