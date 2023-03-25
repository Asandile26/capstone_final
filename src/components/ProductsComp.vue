<template lang="">
  <div >
    <div class="products">
      <div class="Search-Bar">
        <input type="text" id="search" v-model="searchQuery">
        <button type="submit"><i class="bi bi-search"></i></button>
      </div>
      <SpinnerComp class="spinner" v-if="isLoading"/>
      <div class="row" style="gap: 10rem; justify-content: center;" v-else>
        <div class="card" v-for="pro in search" :key="pro.id" style="width: 18rem;">
          <img :src="pro.imgURL" alt="Jogging stuff">
          <div class="card-body">
            <h5>Name: {{pro.prodName}}</h5>
            <p>Price: {{pro.price}}</p>
            <p>size: {{pro.size}}</p>
            <router-link :to="{name: 'product', params : {id: pro.prodID}}" >
              <button class="btn btn-dark w-50">view more</button>
            </router-link>
            <router-link to="/cart"><button class="btn btn-dark w-10">Add to cart</button></router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  setup(){
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.Products);
    const isLoading = computed( ()=>store.state.showSpinner)
    return {
      products,
      isLoading
    }
  },
  data () {
    return {
      searchQuery: '',
      
    }
  },
  computed:{
    search(){
      let sBar = this.products;
      if (this.searchQuery.trim().length > 0) {
                sBar = sBar.filter((product) => product.prodName.toLowerCase().includes(this.searchQuery))
            }
            return sBar
            
    }
  },
  methods: {
    viewProduct(id) {
      this.$route.push('/product/' + id);
    },
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
  .products{
    background-color: rgb(117, 190 ,218 , 0.5);
  }  
  .products{
    padding-top: 50px
  }
  .Search-Bar{
    padding-top: 50px;
    justify-content: end;
    align-content: end;
  }
</style>