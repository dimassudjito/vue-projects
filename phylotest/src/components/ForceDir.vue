<template>
  <div class="container"></div>
</template>

<script>
import * as d3 from 'd3'
import data from '@/assets/miserables.json'

export default {
  name: 'ForceDir',
  mounted() {
    console.log(data)
    this.getChart()
  },
  methods: {
    getChart() {
      let drag = (simulation) => {
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
        }

        function dragged(event) {
          event.subject.fx = event.x
          event.subject.fy = event.y
        }

        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0)
          event.subject.fx = null
          event.subject.fy = null
        }

        return d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      }

      let color = () => {
        const scale = d3.scaleOrdinal(d3.schemeCategory10)
        return (d) => scale(d.group)
      }

      let height = 600

      const links = data.links.map((d) => Object.create(d))
      const nodes = data.nodes.map((d) => Object.create(d))

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          'link',
          d3.forceLink(links).id((d) => d.id)
        )
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(500 / 2, height / 2))

      const svg = d3
        .select('.container')
        .append('svg')
        .attr('viewBox', [0, 0, 500, height])

      const link = svg
        .append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', (d) => Math.sqrt(d.value))

      const node = svg
        .append('g')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', color)
        .call(drag(simulation))

      node.append('title').text((d) => d.id)

      simulation.on('tick', () => {
        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y)

        node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
      })

      invalidation.then(() => simulation.stop())

      return svg.node()
    }
  }
}
</script>

<style></style>
