<template lang="">
    <div class="login">
        <LoginComp/>
        <SpinnerView/>
    </div>
</template>
<script>
import LoginComp from '@/components/LoginComp.vue';
import SpinnerView from './SpinnerView.vue';
export default {
    name: 'LoginView', 
    components: {
        LoginComp,
    SpinnerView}
}
</script>
<style >

</style>