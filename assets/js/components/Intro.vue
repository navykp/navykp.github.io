<template>
    <div>

        <b-card
                class="introcard"
                bg-variant="transparent" text-variant="white"
                img-src="./static/images/profile.png"
                img-height="180vh"
                img-width="180vh"
                img-right

        >
            <b-card-title class="title">Navendu Krishna Pathak</b-card-title>
            <b-card-text>
                {{ intro }}
            </b-card-text>

            <hr class="my-4">

            <p>
                {{ sub }}
            </p>
        </b-card>
    </div>
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
    .introcard {
        border: none;
    }
    .title{
        font-size:5vw;

}
</style>