<template>
    <div>
        <br>

        <b-card-title class="text-white"><i>{{title}}</i></b-card-title>
        <iframe width="760" height="515" :src="videoLink" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                 gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="text-white"><i>{{summary}}</i></p>
    </div>
</template>

<script>
    export default {
        name: "VideoComponent",
        props: ["videoLink", "summary", 'title']
    }
</script>

<style scoped>

</style>