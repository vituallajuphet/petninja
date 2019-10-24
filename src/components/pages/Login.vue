<template>
  <div class="container">
      <form class="form-signin" @submit.prevent="sign_in()">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
     <br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    
        </form>

        {{error}}

        {{fname}}
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'login',
  data(){
      return{
          fname:"",
          email:"",
          password:"",
          error:"",
          userdata:{}
      }
  },
  methods:{
      sign_in(){
         
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
        //   console.log(data)
          this.error =""
          this.userdata = data.user.displayName
          this.router.push({name:'home'})
         console.log(this.userdata)
       
        })
        .catch(err => {
          this.error = err.message;
        });
    
      }
  }


}
</script>

<style  scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

</style>
