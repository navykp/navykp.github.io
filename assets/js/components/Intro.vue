<template>
    <b-jumbotron bg-variant="transparent" text-variant="white">
    <template v-slot:header>Navendu Krishna Pathak</template>

    <template v-slot:lead>
      {{ intro }}
    </template>

    <hr class="my-4">

    <p>
      {{ sub }}
    </p>
  </b-jumbotron>
</template>

<script>
    export default {
        name: "Intro",
        data() {
            return {
                intro: 'Experienced consultant with Deloitte USI in systems engineering domain,' +
                    ' and is responsible for requirement gathering, development and maintenance of Web/Windows' +
                    ' applications which provide enterprise solutions to organisations world-wide.',
                sub: 'Engineer, Artist, Entrepreneur'
            }
        }
    }
</script>

<style scoped>

</style>