<template>
    <article class="single-tour">
        <img :src="tour.image" :alt="tour.name"/>
        <footer>
            <div class="tour-info">
                <h4>{{tour.name}}</h4>
                <h4 class="tour-price">${{tour.price}}</h4>
            </div>
            <p>
                {{tour.info}}
            </p>
            <button @click="$emit('delete-tour', tour.id)" class="delete-btn">
                not interested
            </button>
        </footer>
    </article>
</template>

<script>
export default {
    components: {

    },
    props: {
        tour: Object
    },
}
</script>