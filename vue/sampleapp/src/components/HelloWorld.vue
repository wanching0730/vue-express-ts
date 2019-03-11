<template>
  <div class="hello">

    <div id="app-6">
      <p>Enter your name</p>
      <input v-model="name" type="text">
    </div>

    <div id="app-6">
      <p>Enter your email</p>
      <input v-model="email" type="email">
    </div>

    <button @click="submit">Submit</button>
    <button @click="show">Show all</button>

     <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user["name"]}}</td>
        <td>{{user["email"]}}</td>
      </tr>
    </table>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import axios from 'axios'

@Component
export default class HelloWorld extends Vue {
  
  name: string = '';
  email: string = '';
  users = []

  data() {
    return {
      users: []
    }
  }

  submit() {
    return fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email
        })
    }).then(result => result.json()).then(reply => console.log(reply));
  }

  show() {
    return fetch(`http://localhost:3000/users`).then(result => result.json())
      .then(reply => {
        console.log(reply);
        this.users = reply
      });
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
</style>
