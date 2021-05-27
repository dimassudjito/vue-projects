<template>
  <div class="container"></div>
</template>

<script>
import * as d3 from 'd3'

import values from '@/assets/numbers.json'

export default {
  name: 'Sandbox',
  mounted() {
    console.log([d3.min(values), d3.median(values), d3.max(values)])
  },
  methods: {}
}
</script>

<style></style>
