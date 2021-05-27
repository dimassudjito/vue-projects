<template>
  <div>
    <h1>Tree test</h1>
    <svg id="tree_display" />
  </div>
</template>

<script>
import { phylotree } from 'phylotree'
import 'phylotree/build/phylotree.css'
import * as d3 from 'd3'

export default {
  name: 'App',
  components: {},
  mounted() {
    console.log(d3)
    d3.text('yokoyama.nwk', function(error, newick) {
      var height = 400
      var width = 400
      var tree = d3.layout
        .phylotree()
        .svg(d3.select('#tree_display'))
        .options({
          'left-right-spacing': 'fit-to-size',
          // fit to given size top-to-bottom
          'top-bottom-spacing': 'fit-to-size',
          // fit to given size left-to-right
          selectable: false,
          // make nodes and branches not selectable
          collapsible: false,
          // turn off the menu on internal nodes
          transitions: false
          // turn off d3 animations
        })
        .size([height, width])
        .node_circle_size(0) // do not show "circles" at internal nodes

      tree(newick)
        // parse the Newick into a d3 hierarchy object with additional fields
        // generate node coordinates
        .layout()
      // render the tree
    })
  }
}
</script>

<style></style>
