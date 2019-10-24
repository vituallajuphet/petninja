<template>
  <div class="container">
      <h2>Home</h2>

      <button class="btn btn-primary" @click="signOut()">Logout</button>


    <div class="card" style="width:700px">
       
        <div class="card-body">
          <h4 class="card-title">Add Post</h4>
             <form @submit.prevent="savepost()">
              <div class="form-group">
                <label for="email">Title</label>
                <input v-model="title" type="text" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="comment">Content</label>
                <textarea v-model="content" class="form-control" rows="5" id="comment"></textarea>
              </div> 
              <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
        </div>
   </div>




   <ul>
     <li v-for="data in datas" :key="data.title">{{data.title}}</li>
   </ul>
      

  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'home',
  data(){
    return{
      title:"",
      content:"",
      datas:[]
    }
  },
  methods:{
    signOut(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'home'})
      })
    },
    savepost(){
  
      let postTitle = this.title
      let postContent = this.content

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var ref = firebase.app().database().ref();
          var postsRef = ref.child("posts");
        //   const userID  = user.uid;
        //   firebase.database().ref('posts/' + userID).set({
        //       title: postTitle,
        //       content: postContent,
        //  }, function (err){
        //     if(err){
        //       alert(err)
        //     }else{
        //       alert("saved!")
        //     }
        //  });
        postsRef.push().set({
          content: postContent,
          title: postTitle
        }, function(err){
          if(err){
            alert(err)
          }else{
            alert("saved")
          }
        });
        } 
    });

    },
    getdata(){
        var mdata = [];
        var database = firebase.database();
        var leadsRef = database.ref('posts');
        leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              mdata.push(childData)
            });    
        });

        this.datas = mdata;
    }

  },
  mounted(){
    this.getdata();
  }

}

</script>

<style  scoped>
  .card{margin: 10px auto}
</style>