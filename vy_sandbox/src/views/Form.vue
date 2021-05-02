<template>
  <div class="form ma-4">
    <v-text-field
            value="Form Playground"
            disabled
            outlined
    >
    </v-text-field>

    <v-form v-model="valid">
        <v-container>
        <v-row>
            <v-col
            cols="12"
            md="6"
            >
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    :counter="10"
                    label="Username"
                    required
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        </v-container>
        <center>@{{this.username}} by  {{this.email}}</center>
        <v-divider></v-divider>
    </v-form>

    <v-select
    :items="countries_name"
    label="Countries"
    >
    </v-select>

  </div>
</template>

<script>
const url = "https://restcountries.eu/rest/v2/all"

export default {
    data() {
        return {
            valid: false,
            username: '',
            usernameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            // -- //
            items: ["a", "b", "c"],
            countries: [],
            countries_name: [],
        }
    },
    methods: {
        async fetchCountries() {
            const res = await fetch(url)
            const data = await res.json()
            this.countries = data
        }
    },
    async created() {
        await this.fetchCountries()
        this.countries.forEach((country) => {
            this.countries_name.push(country.name)
        })
    }
}
</script>
