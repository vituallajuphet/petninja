<template>
  <div >
      <!-- <form class="form-signin" @submit.prevent="sign_in()">
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

        {{fname}} -->

      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login Account</v-toolbar-title>
                <v-spacer></v-spacer>
             
          
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                   label="E-mail"
                   v-model="email"
                    :rules="emailRules"
                    name="login"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"                    
                    label="Password"
                    name="password"
                    :rules="passRules"
                    type="password"
                  ></v-text-field>
                   <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  @click="validate" color="primary">Login</v-btn>
              </v-card-actions>
                </v-form>
                 <v-alert type="error" v-if="error !=''">
                 {{error}}
              </v-alert>
              </v-card-text>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>

  </div>
  


</template>

<script>
import firebase from "firebase";

export default {
  name: 'login',
  data(){
      return{
         valid: true,
          fname:"",
          email:"",
          password:"",
          error:"",
          userdata:{},
          emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
         ],
         passRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 10) || 'Password must be less than 10 characters',
        ],
      }
  },
  methods:{
  
      validate () {
        if (this.$refs.form.validate()) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
            //   console.log(data)
              this.error =""
              this.userdata = data.user.displayName
        
          
            })
            .catch(err => {
              this.error = err.message;
            });
          
        }
      },
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
