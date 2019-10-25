import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import firebase from 'firebase'
import VuePageTransition from 'vue-page-transition'
import vuetify from './vuetify'




Vue.use(VuePageTransition)


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCntlkoapB3RiVr9j6JvyeVkNihRM2aqok",
  authDomain: "petninja-55992.firebaseapp.com",
  databaseURL: "https://petninja-55992.firebaseio.com",
  projectId: "petninja-55992",
  storageBucket: "petninja-55992.appspot.com",
  messagingSenderId: "320450692067",
  appId: "1:320450692067:web:aecf21f427bff279b156d6",
  measurementId: "G-WSC2TGZCXE"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
