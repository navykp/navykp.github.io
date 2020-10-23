<template>
    <div style="position: relative">
        <b-card bg-variant="transparent" style="border: none">
            <b-img-lazy class="icon" :src="img"></b-img-lazy>
        </b-card>
        <i><h1 style="margin-left: 1vw" class="text-left text-white"> {{ degree }}</h1></i>
        <i><h4 style="margin-left: 1vw" class="text-left text-white"> {{ specialization }}</h4></i>
        <i><h6 style="margin-left: 1vw" class="text-left text-white"> {{ subjects }}</h6></i>

        <br>
        <br>
        <span v-if="projects !== null">
            <b-col class="w-100" >
                <hr class="mt-5">
               <h5><i>Projects</i></h5>
            </b-col>
        </span>
        <span class="projectCard" v-for="project in projects" :key="project.name">
            <b-card class="project">
                <b-col>{{project.name}}</b-col>
            </b-card>
        </span>
        <br>
        <span v-if="extras !== null">
            <b-col class="w-100" >
                <hr class="mt-5">
               <h5><i>Extra-Curricular Activities</i></h5>
            </b-col>
        </span>
        <span class="projectCard" v-for="extra in extras" :key="extra.name">
            <b-card class="project">
                <b-col>{{extra.name}}</b-col>
            </b-card>
        </span>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Education",
        props: ['degree', 'specialization', 'subjects', 'projects', 'extras', 'img']
    }
</script>

<style scoped>
    .icon {
        width: 30vh;
        height: 35vh;
        position: absolute;
        right: 0;
        background: rgb(255, 255, 255);
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 66%);
    }

    .projectCard {
        margin: 2%;
        display: inline-block;
    }

    .project {
        transition: all 1s ease;
        transform: scale(1);
        -webkit-box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        -moz-box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        background: cornflowerblue;
    }

    .project:hover {
        transform: scale(1.2) perspective(2px);
    }
</style>