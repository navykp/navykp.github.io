<template>
    <b-jumbotron bg-variant="transparent" header="Skills">
        <skill-wheel></skill-wheel>
    </b-jumbotron>
</template>

<script>
    import SkillWheel from "../components/SkillWheel";
    export default {
        name: "Skills",
        components: {SkillWheel}
    }
</script>

<style scoped>

</style>