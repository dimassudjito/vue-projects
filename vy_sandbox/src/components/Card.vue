<template>
    <v-card
        elevation="2"
    >
        <v-container>
            <v-row>
                <v-col>
                    <p>This is row 1</p>
                </v-col>
                <v-col>
                    <p>This is row 2</p>
                    <slot></slot>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style scoped>
.card {
    background-color: red;
}
</style>