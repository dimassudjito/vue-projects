<template>
  <div class="hello">
    <p>
      {{
        status
          ? 'You are logged in'
          : 'You are not logged in, please login first'
      }}
    </p>
    <button v-if="status" @click="logout">Log out</button>
  </div>
</template>

<script>
import Pool from '../UserPool'

export default {
  name: 'Register',
  props: {},
  data() {
    return {
      status: false
    }
  },
  methods: {
    getSession() {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            console.log('authentication failed: ', session)
          } else {
            console.log('authentication sucessful: ', session)
            this.status = true
          }
        })
      } else {
        console.log('authentication failed: user is null ')
      }
    },
    logout() {
      const user = Pool.getCurrentUser()
      if (user) {
        user.signOut()
        this.$router.push('/')
      }
    }
  },
  created() {
    this.getSession()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
