import Vue from 'vue'
import VueRouter from 'vue-router'
import FormApi from './components/FormApi'
import Posts from './components/Posts'

Vue.use(VueRouter);
const router = new VueRouter({
   mode:'history',
    routes: [
    {
        name:"home",
        path:'/',
        component:FormApi
    },
    {
        name:"liste",
        path:'/liste',
        component:Posts
    }
    ]
});

export default router