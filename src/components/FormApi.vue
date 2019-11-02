<template>
    <div>
        <form class="mx-auto m-5" style="width:30%;">
        <div class="form-group">
            <label for="exampleInputEmail1">Iduser</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="user">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Title</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="title">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Body</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="body">
        </div>

        <button type="button" class="btn btn-primary" @click="addPost">Add</button>
        </form>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">UsreId</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <td> {{post.userId}} </td>
      <td> {{post.title}} </td>
      <td> {{post.body}} </td>
    </tr>

  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                user:1,
                title:'',
                body:'',
                posts:[]
            }
        },
        methods: {
            addPost(){
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                "userId":this.user,
                "title":this.title,
                "body":this.body
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.error(err)
            })
            },
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
                    this.posts=res.data;
                    console.log(res)
                }).catch(err=>{
                    console.error(err)
                });
            }
        },
        created() {
            this.getPosts()
        },
    }
</script>

<style lang="scss" scoped>

</style>