<template>
  <div class="hello">

    <div id="app-6">
      <h2>{{ msg }}</h2>
      <p>Enter name</p>
      <input v-model="subscriber.name" type="text">
    </div>

    <div id="app-6">
      <p>Enter email</p>
      <input v-model="subscriber.email" type="email">
    </div>

    <button @click="create">Create</button>
    <button @click="update">Update</button>

    <h3>Subscribers</h3>
    <small>Select any subsriber to update or delete</small>
    <br/>
    <button @click="showAll">Show all</button>
    <button @click="remove">Delete</button>

    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="subscriber in subscribers">
        <td>{{subscriber["name"]}}</td>
        <td>{{subscriber["email"]}}</td>
        <input type="checkbox" :value="subscriber.subscriberId" @click="alertUser($event)">
      </tr>
    </table>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { NewsSubscriber } from '../types';

@Component
export default class Subscriber extends Vue {
  @Prop() private msg!: string;
  
  subscribers: NewsSubscriber[] = []
  subscriber: NewsSubscriber = {
    subscriberId: 0
    name: ''
    email: ''
  }

  alertUser(event:any) {
    if(event.target.checked) {
      this.subscriber.subscriberId = event.target.value;
      alert("UPDATE or DELETE?");
    } else {
      this.subscriber.subscriberId = 0;
    }
   
  }

  showAll() {
    return fetch(`http://localhost:3000/subscribers`).then(result => result.json())
      .then(reply => {
        console.log(reply);
        this.subscribers = reply
      });
  }

  create() {
    return fetch(`http://localhost:3000/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.subscriber)
    }).then(result => result.json()).then(reply => if(reply) alert("subscriber created"));
  }

  update() {
    if(this.subscriber.subscriberId != 0) {
      return fetch(`http://localhost:3000/subscribers/${this.subscriber.subscriberId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.subscriber)
      }).then(result => result.json()).then(reply => if(reply) alert("subscriber updated"))
    } else {
      alert("Please select subscriber to update");
    }
    
  }

  remove() {
    if(this.subscriber.subscriberId != 0) {
      return fetch(`http://localhost:3000/subscribers/` + this.subscriber.subscriberId, {
        method: 'DELETE'
      }).then(result => result.json()).then(reply => if(reply) alert("subscriber deleted"))
    } else {
      alert("Please select subscriber to delete");
    }
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
