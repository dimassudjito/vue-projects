<template>
  <div class="hello">
    <h1>Register</h1>
    <form @submit="onSubmit">
      <input type="text" v-model="email" placeholder="email">
      <br>
      <input type="password" v-model="password" placeholder="password">
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import UserPool from '../UserPool';

export default {
  name: 'RegisterMain',
  props: {
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      event.preventDefault();
      
      UserPool.signUp(this.email, this.password, [], null, (err, data)=>{
        if (err) console.error(err);
        console.log(data);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
