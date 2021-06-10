<template>
  <div class="hello">
    <div v-for="country in countries" :key="country.name">
      {{ country.name }}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  apollo: {
    countries: gql`
      query {
        countries {
          name
        }
      }
    `
  }
}
</script>
