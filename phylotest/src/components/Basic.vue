<template>
  <div class="container">
    <p>This is a paragraph</p>
    <p>This is another paragraph</p>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Sandbox',
  mounted() {
    this.trans()
  },
  methods: {
    selectP() {
      d3.select('p').style('color', 'blue')
    },
    randColor() {
      d3.selectAll('p').style('color', function() {
        return 'hsl(' + Math.random() * 360 + ',100%,50%)'
      })
    },
    enterP() {
      let pInCon = d3.select('.container').selectAll('p')
      pInCon
        .data([4, 8, 15, 16, 23, 42])
        .enter()
        .append('p')
        .text((data) => "I'm number " + data)
    },
    trans() {
      d3.select('.container')
        .transition()
        .duration(750)
        .style('background-color', 'red')
    }
  }
}
</script>

<style></style>
