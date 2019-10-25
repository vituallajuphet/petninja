<template>
  <v-card
    max-width="1090px"
    class="mx-auto"
  >

    <v-container>
      <v-row>
          <v-col cols=12>

          </v-col>
      </v-row>
      <v-row >
        <v-col 
            cols="6"  
            v-for="data in datas"
            :key="data.title">
          <v-card
            color="#385F73"
            dark
           
          >
            <v-card-title class="headline">{{data.title}}</v-card-title>

            <v-card-subtitle>{{data.content}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
   
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'blog',
  data(){
    return{
      datas:[]
    }
  },
  methods:{
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