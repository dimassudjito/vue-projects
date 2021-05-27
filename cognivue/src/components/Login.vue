<template>
  <div class="hello">
    <h1>Login</h1>
    <form @submit="onSubmit">
      <input type="text" v-model="email" placeholder="email" />
      <br />
      <input type="password" v-model="password" placeholder="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import UserPool from '../UserPool'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

export default {
  name: 'Login',
  props: {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      event.preventDefault()

      const user = new CognitoUser({
        Username: this.email,
        Pool: UserPool
      })

      const authDetails = new AuthenticationDetails({
        Username: this.email,
        Password: this.password
      })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSucess: ', data)
          this.$router.push('dashboard')
        },

        onFailure: (err) => {
          console.error('onFailure: ', err)
        },

        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
