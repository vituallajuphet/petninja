import Vue from 'vue'
import VueRouter  from 'vue-router'
import firebase from 'firebase'


import home from '@/components/pages/Home.vue'
import about from '@/components/pages/About.vue'
import login from '@/components/pages/Login.vue'
import register from '@/components/pages/Register.vue'
import blog from '@/components/pages/Blog.vue'


Vue.use(VueRouter)

const router = new VueRouter ({
    base: __dirname,
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: home, meta:{requireAuth:true}},
        { path: '/about', name: 'about', component: about, meta:{requireAuth:true}},
        { path: '/blog', name: 'blog', component: blog, meta:{requireAuth:true}},
        { path: '/login', name: 'login', component: login},
        { path: '/register', name: 'register', component: register},
       
    ]
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requireAuth)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user && !requiresAuth) {
            next({name:'home'});
        } 
        else if (!user && requiresAuth) {
            next({name:'login'});
        }
        else{
            next()
        }
    });
 
 })

  export default router;
