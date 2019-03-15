<template>
  <div class="hello">

    <div id="app-6">
      <h2>{{ msg }}</h2>
       <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>Enter name</p>
      <input v-model="subscriber.name" type="text">

      <p>Enter email</p>
      <input v-model="subscriber.email" type="email">
    </div>

    <button @click="create">Create</button>

    <br/>
    <p>{{ result }}</p>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { NewsSubscriber } from '../types';

@Component
export default class Subscriber extends Vue {
  @Prop() private msg!: string;
  
  errors: string[] = [];
  result: string = '';

  subscriber = <NewsSubscriber> {
    subscriberId: 0,
    name: '',
    email: ''
  }

  validEmail (email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  create() {
    this.errors = [];

    if (!this.subscriber.name) {
      this.errors.push('Name required.');
    }

    if (!this.subscriber.email) {
      this.errors.push('Email required.');
    } else if (!this.validEmail(this.subscriber.email)) {
      this.errors.push('Valid email required.');
    }

    if (!this.errors.length) {
      return fetch(`http://newsletter-env.xcjpdqce3e.ap-southeast-1.elasticbeanstalk.com/subscribers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.subscriber)
      }).then(result => result.json()).then(reply => { 
        if(!reply.error) {
          this.result = reply;
          alert("subscriber created")
        }
        else alert("Something wents wrong")}
      );
    }
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px
}

li {
  color: red;
}
</style>
