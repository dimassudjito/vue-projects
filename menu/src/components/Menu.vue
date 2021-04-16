<template>
    <div class="section-center">
        <div :key="menuItem.id" v-for="menuItem in menuItems">
            <article class="menu-item">
                <img :src="menuItem.img" class="photo"/>
                <div class="item-info">
                    <header>
                        <h4>{{menuItem.title}}</h4>
                        <h4 class="price">${{menuItem.price}}</h4>
                    </header>
                        <p class="item-text">{{menuItem.desc}}</p>
                </div>
            </article>
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        menuItems: Array,
    },
}
</script>
