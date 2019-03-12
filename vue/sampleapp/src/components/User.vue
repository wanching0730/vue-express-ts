<template>
  <div class="hello">

    <div id="app-6">
      <h2>{{ msg }}</h2>
      <p>Enter your name</p>
      <input v-model="user.name" type="text">
    </div>

    <div id="app-6">
      <p>Enter your email</p>
      <input v-model="user.email" type="email">
    </div>

    <button @click="create">Submit</button>
    <button @click="update">Update</button>
    <button @click="remove">Delete</button>
    <button @click="showAll">Show all</button>


     <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user["name"]}}</td>
        <td>{{user["email"]}}</td>
        <input type="checkbox" :value="user.userId" @click="alertUser($event)">
      </tr>
    </table>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { User } from '../types';
import axios from 'axios';

@Component
export default class User extends Vue {
  @Prop() private msg!: string;
  
  users: User[] = []
  user: User = {
    userId: 0
    name: ''
    email: ''
  }

  alertUser(event:any) {
    console.log(event.target.value);
    this.user.userId = event.target.value;
  }

  showAll() {
    return fetch(`http://localhost:3000/users`).then(result => result.json())
      .then(reply => {
        console.log(reply);
        this.users = reply
      });
  }

  create() {
    return fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
    }).then(result => result.json()).then(reply => if(reply) alert("user created"));
  }

  update() {
    // return axios.put(`http://locahost:3000/users/${this.user.userId}`,JSON.stringify(this.user)).then(
    //   result => alert("done")
    // );
    console.log(JSON.stringify(this.user));
    return fetch(`http://locahost:3000/users/${this.user.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    }).then(result => result.json()).then(reply => if(reply) alert("user updated"))
  }

  remove() {
    // return axios.delete(`http://locahost:3000/users/` + this.user.userId).then(
    //   result => result
    //)
    // return fetch(`http://locahost:3000/users/` + this.user.userId, {
    //   method: 'DELETE'
    // }).then(result => result.json()).then(reply => if(reply) alert("user deleted"))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table {
  margin: auto;
  margin-top: 10px;
}

button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px
}
</style>
