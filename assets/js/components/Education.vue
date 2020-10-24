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
            <b-col class="w-100">
                <hr class="mt-5">
               <h5><i>Projects</i></h5>
            </b-col>
        </span>
        <span class="projectCard" v-for="project in projects" :key="project.name">
            <b-card class="project">
                <b-col class="projTitle">{{project.name}}</b-col>
                <p class="projDesc">{{ project.desc }}</p>
                <span v-if="project.img !== null">
                <b-img-lazy class="illustration"
                            :src="project.img"
                ></b-img-lazy>
                    </span>
                <span v-if="project.website !== null">
                    <b-embed
                            type="iframe"
                            :src="project.website"
                            aspect="16by9"
                    />
                </span>
                <p v-if="project.techs !== null">Technology:
                <span style="display: inline" v-for="tech in project.techs" v-bind:key="tech">
                    <b-img-lazy class="skicon" :src="tech"/>
                </span>
                </p>
            </b-card>
        </span>
        <br>
        <span v-if="extras !== null">
            <b-col class="w-100">
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
        display: -webkit-inline-flex;
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

    .projTitle {
        text-align: center;
        font-size: 2vh;
        font-weight: bold;

    }

    .projDesc {
        text-align: justify;
        font-size: 2vh;
        font-weight: lighter;
    }

    .illustration {
        height: 40vh;
    }

    .illustration:hover {
        transform: scale(1.2) perspective(2px);
    }

    .skicon {
        width: 2vw;
    }
</style>