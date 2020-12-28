<template>
    <div>
        <b-card class="project">
            <b-col class="projTitle">{{name}}
                <p class="projDesc">{{ description }}</p></b-col>
            <b-col>
                <aside v-if="img !== 'null'">
                    <b-img-lazy class="illustration"
                                :src="img"
                    ></b-img-lazy>
                </aside>
            </b-col>
            <br>
            <span v-if="website !== 'null'">
                <i><a class="text-left" :href="website">Learn more here</a></i>
                </span>
            <p v-if="techs !== null">Technology:
                <span style="display: inline" v-for="tech in techs" v-bind:key="tech">
                    <b-img-lazy class="skicon" :src="tech"/>
                </span>
            </p>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ProjectDescription",
        props: ['name', 'description', 'img', 'website', 'techs'],
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .project {

        transition: all 1s ease;
        transform: scale(1);
        -webkit-box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        -moz-box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.59);
        background: cornflowerblue;
    }

    .projTitle {
        text-align: center;
        font-size: 4vh;
        font-weight: bold;

    }

    .projDesc {
        text-align: justify;
        font-size: 3vh;
        font-weight: lighter;
    }

    .illustration {
        width: 50%;
        height: auto;
    }

    .illustration:hover {
        transform: scale(1.2) perspective(2px);
    }

    .skicon {
        width: 4vw;
    }
</style>