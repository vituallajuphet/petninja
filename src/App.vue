<template>
  <div id="apps">
    <v-app>
    <appnav></appnav>
    
     <v-content>
       <vue-page-transition name="fade-in-up">
      <router-view></router-view>
        </vue-page-transition>
      </v-content>
  
   </v-app>
  </div>
</template>

<script>

import appnav from '@/components/includes/Nav.vue'

export default {
  name: 'app',
  components:{
    appnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
