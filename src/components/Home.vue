<template>
    <div>
        <form class="mx-auto m-5" style="width:30%;">
        <div class="form-group">
            <label for="exampleInputEmail1">Nom</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="nom">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Prenom</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="prenom">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Age</label>
            <input type="number" class="form-control" id="exampleInputPassword1" v-model="age">
        </div>

        <button type="butoon" class="btn btn-primary" @click="addUser">Add</button>
        </form>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">prenom</th>
      <th scope="col">Age</th>
      <th>supprime</th>
    </tr>
  </thead>
  <tbody v-for="(user,index) in users" :key="index">
    <tr v-if="user.age>10" class="table-danger">
      <td> {{user.nom}} </td>
      <td> {{user.prenom}} </td>
      <td> {{user.age}} </td>
      <td>
          <button class="btn btn-danger btn-sm" @click="deleteUser(index)">delete</button>
      </td>
    </tr>
    <tr v-else class="table-success">
      <td> {{user.nom}} </td>
      <td> {{user.prenom}} </td>
      <td> {{user.age}} </td>
      <td>
          <button class="btn btn-danger btn-sm">delete</button>
      </td>
    </tr>
  </tbody>
</table>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                nom:'',
                prenom:'',
                age:0,
                users:[]
            }
        },
        methods:{
            addUser(){
                let user={
                    "nom":this.nom,
                    "prenom":this.prenom,
                    "age":this.age
                };
                this.users.push(user);
                console.log(this.users)
            },
            deleteUser(index){
                this.$delete(this.users,index);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>