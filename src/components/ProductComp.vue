<template lang="">
    <div class="product">
        <div class="card" style="width: 35rem; justify-content: center; height: auto">
  <img :src="product?.imgURL"  alt="Jogging stuff">
  <div class="card-body">
    <h5>Name: {{product?.prodName}}</h5>
    <p>Price: {{product?.price}}</p>
    <p>size: {{product?.size}}</p>
    <p>Category: {{product?.categories}}</p>
    <p>Description: {{product?.descript}}</p>
    <button>Add to cart</button>
  </div>
</div>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'ProductComp',
    setup(){
      const store = useStore()
      // store.dispatch("fetchProduct")
      const product = computed(() => store.state.Product)
      return{
        product
      }
    },
    mounted(){
      this.$store.dispatch("fetchProduct", this.$route.params.id)
      
    }
}
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
  width: 35rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
 
</style>