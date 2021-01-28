<template>
    <div>
        <br>
        <b-card-title class="text-white"><i>{{title}}</i></b-card-title>
        <b-embed
            type="iframe"
            aspect="16by9"
            :src="videoLink"
            allowfullscreen
            >
        </b-embed>
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