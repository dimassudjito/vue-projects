<template>
    <div class="btn-container">
        <div :key="category" v-for="category in categories">
            <button
            class="filter-btn"
            @click="$emit('filter-items', category)"
            >
                {{category}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Categories",
    props: {
        categories: Array,
    }
}
</script>