<template lang="">
    <div>
        <ProductsComp/>
    </div>
</template>
<script>
import ProductsComp from '@/components/ProductsComp.vue';
export default {
    name: 'ProductsView',
    components: {
        ProductsComp,
    }
}
</script>
<style scoped>
.products{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
    
</style>