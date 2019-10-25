<template>
    <div>
       <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
           <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
           </v-list-item-icon>
           <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isforAuth"></v-app-bar-nav-icon>
      <v-toolbar-title>Petninja</v-toolbar-title>
       <v-spacer></v-spacer>
      <v-toolbar-items v-if="isforAuth">
        <v-btn text exact to="/home">Home <v-icon right size="20">mdi-home</v-icon></v-btn>
        <v-btn text to="/blog">Blog <v-icon  right size="20">mdi-blogger</v-icon></v-btn>
        <v-btn text to="/about">About <v-icon right size="16">mdi-help</v-icon></v-btn>
        <v-btn text>Contact Us <v-icon right size="15">mdi-cellphone</v-icon></v-btn>
        <v-btn text @click="signOut()">Logout <v-icon right size="20">mdi-account</v-icon></v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text exact to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </v-toolbar-items>
    </v-app-bar>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
   data(){
     return{
       drawer: false,
       items:[
          { title: 'Home', icon: 'mdi-home' },
          { title: 'About', icon: 'mdi-help' },
       ]
     }
   },
  methods:{
      signOut(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'home'})
      })
    }
  },
  computed :{
    isforAuth(){
        const required = this.$route.meta.requireAuth;
        return required;
    }
  },
  mounted(){
 
  }
}

</script>

<style  scoped>
a:hover{text-decoration: none}
</style>