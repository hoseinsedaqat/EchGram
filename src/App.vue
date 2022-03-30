<template>
    <div>
    <HeaderLayout/>
    <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderLayout from '@/components/Layout/Header/HeaderLayout.vue'
export default Vue.extend({
    name:"App",
    components:{
        HeaderLayout
    }
})
</script>

<style>

</style>