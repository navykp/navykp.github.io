<template>
    <div class="date">
        <b-img-lazy class="calendar-icon" src="./static/graphics/cal.svg"></b-img-lazy>
        {{ start }} - {{ end }}
    </div>
</template>

<script>
    export default {
        name: "date",
        props: ['start', 'end']
    }
</script>

<style scoped>
    .date {
        display: inline;
    }

    .calendar-icon {
        height: 7vh;
        width: 7vh;
    }
</style>