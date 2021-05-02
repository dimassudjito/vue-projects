<template>
  <div>
    <v-container>
          <v-row>
            <v-col
              v-for="dog in dogs"
              :key="dog"
              cols="4"
            >
              <v-card height="200">
                <v-img
                :src="dog"
                max-height="200"
                >
                </v-img>
              </v-card>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>
const url = 'https://dog.ceo/api/breed/retriever/golden/images'

  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        dogs: [],
      }
    },
    methods: {
      async fetchDogs() {
        const res = await fetch(url)
        const data = await res.json()
        this.dogs = data.message
      }
    },
    async created() {
      await this.fetchDogs()
    }
  }
</script>
