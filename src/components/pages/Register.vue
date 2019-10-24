<template>
  <div class="container">
      <form class="form-signin" @submit.prevent="register_account()">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <label for="inputEmail" class="sr-only">Name</label>
        <input v-model="name" type="text" id="inputEmail" class="form-control" placeholder="Full name" required autofocus>
        <br>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
     <br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    
        </form>

        {{error}}
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'register',
  data(){
      return{
          email:"",
          password:"",
          name:"",
          error:"",
          
      }
  },
  methods:{
      register_account(){
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {
            data.user
                .updateProfile({
                  displayName: this.name
                })
                .then(() => {});
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
