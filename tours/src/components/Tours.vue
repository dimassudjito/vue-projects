<template>
    <section>
        <div class="title">
            <h2>our tours</h2>
            <div class="underline"></div>
        </div>
        <div :key="tour.id" v-for="tour in tours">
            <Tour @delete-tour="$emit('delete-tour', tour.id)" :tour="tour"/>
        </div>
    </section>
</template>

<script>
import Tour from './Tour'

export default {
    components: {
        Tour,
    },
    props:  {
        tours: Array,
    },
}
</script>