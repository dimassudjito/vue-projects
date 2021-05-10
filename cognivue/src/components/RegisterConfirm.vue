<template>
  <div class="hello">
    <h1>Confirm</h1>
    <form @submit="onSubmit">
      <input type="text" v-model="email" placeholder="email">
      <br>
      <input type="text" v-model="code" placeholder="code">
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';


export default {
    name: 'RegisterConfirm',
    data() {
        return {
            email: '',
            code: '',
        }
    },
    methods: {
        onSubmit() {
            event.preventDefault();

            const user = new CognitoUser({
                Username: this.email,
                Pool: UserPool
            });

            user.confirmRegistration(this.code, true, (err, result) => {
                if (err) {
                    console.log('error: ', err)
                } else {
                    console.log('result: ', result)
                }
            })
        },
    }
}
</script>

<style>

</style>