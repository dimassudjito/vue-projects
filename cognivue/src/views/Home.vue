<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Status/>
    <Register/>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Status from '@/components/Status.vue'

export default {
  name: 'Home',
  components: {
    Register,
    Login,
    Status
  }
}
</script>
