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
            <b-card-text class="card-subtitle">
                {{ sub }}
            </b-card-text>
        </b-card>
        <hr class="my-4">
        <about :abt="intro" :subIntro="subintro"></about>
        <hr class="my-4">
        <interests></interests>

    </div>
</template>

<script>
    import About from "../components/About";
    import Interests from "../components/Interests";

    export default {
        name: "Intro",
        components: {About, Interests},
        data() {
            return {
                intro: 'I am an experienced consultant with Deloitte USI in systems engineering domain,' +
                    ' and I have bene responsible for requirement gathering, development and maintenance of Web/Windows' +
                    ' applications which provide enterprise solutions to organisations world-wide.',
                subintro: 'Following the footprints of my father, I became an engineer feeding my inquisitive nature' +
                    ' and passion for exploration. I enjoy picking apart electronic equipment and then putting it back together.' +
                    'I have a bachelors in Electronics and Communications Engineering from Jaypee Institute of Information Technology',
                sub: 'Engineer, Artist, Entrepreneur'
            }
        }
    }
</script>

<style scoped>
    .introcard {
        border: none;
    }

    .title {
        font-size: 5vw;

    }
</style>