<script>
import Vue from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { VueLibSample, FccButton } from '@/entry.esm'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueLibSample,
    FccButton
  }
})
</script>

<template>
  <div id="app">
    <vue-lib-sample />
    <FccButton />
  </div>
</template>
