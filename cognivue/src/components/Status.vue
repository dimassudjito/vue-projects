<template>
  <div class="hello">
      {{status ? 'You are logged in' : 'Please login below'}}
  </div>
</template>

<script>
import Pool from '../UserPool';

export default {
  name: 'Register',
  props: {
  },
  data() {
    return {
      status: false
    }
  },
  methods: {
    getSession() {
        user = Pool.getCurrentUser()
        if (user) {
            user.getSession((err, session) => {
            if (err) {
                console.log('session: ', session)
            } else {
                console.log('session: ', session)
            }
            })
        } else {
            console.log('session: ', session)
        }
    }
  },
  created() {
      console.log("test")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
