<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="col-md-12 center">
                    <b-img-lazy class="icon" src="./static/graphics/skills.svg"></b-img-lazy>
                    <b><i><h4>Skills</h4></i></b>
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
        <span style="display: inline" v-for="skill in skills" v-bind:key="skill.skillType">
            <b><i>{{skill.skillType}}</i></b>
            <br>
            <hr>
            <span style="display: inline-flex" v-for="tech in skill.techs" v-bind:key="tech.id">
                <skill-display
                        :img="tech.img"
                        :description="tech.description"
                        :skill-level="tech.level"
                        :title="tech.title"
                ></skill-display>
            </span>
            <br>
        </span>
    </div>
</template>

<script>
    import SkillWheel from "../components/SkillWheel";
    import SkillDisplay from "../components/SkillDisplay";

    export default {
        name: "Skills",
        components: {SkillWheel, SkillDisplay},
        data() {
            return {
                skills: [
                    {
                        'skillType': 'Programming & Frameworks',
                        techs: [
                            {
                                'id': 1,
                                'title': '.Net Technologies',
                                'level': 4.5,
                                'img': './static/images/net.png',
                                'description': 'I have used .Net technologies professionally for over 5 years'
                            },
                            {
                                'id': 2,
                                'title': 'C++',
                                'level': 4,
                                'img': './static/images/c++.png',
                                'description': 'I have been professionally trained in C++ as part of my learning at Infosys'
                            },
                            {
                                'id': 3,
                                'title': 'Java',
                                'level': 3.4,
                                'img': './static/images/java.png',
                                'description': 'I have used Java for several academic projects. '
                            },
                            {
                                'id': 6,
                                'title': 'Python',
                                'level': 3,
                                'img': './static/images/python.png',
                                'description': 'I have been trained professionally in basic Python'
                            },
                            {
                                'id': 4,
                                'title': 'Tensorflow',
                                'level': 2.5,
                                'img': './static/images/tensorflow.png',
                                'description': 'I have used Tensorflow as a basic introduction to Deep Learning'
                            },
                            {
                                'id': 5,
                                'title': 'SciKit Learn',
                                'level': 2.5,
                                'img': './static/images/scikitlearn.png',
                                'description': 'I have used Scikit Learn library as a basic introduction to ML and AI'
                            }]
                    },
                    {
                        'skillType': 'Web Development',
                        techs: [
                            {
                                'id': 1,
                                'title': 'Angular.JS',
                                'level': 4,
                                'img': './static/images/angular.png',
                                'description': 'I have used Angular for several web projects professionally'
                            },
                            {
                                'id': 2,
                                'title': 'Vue.JS',
                                'level': 4.5,
                                'img': './static/images/vue.png',
                                'description': 'I have used Vue for several personal projects, including this website'
                            },
                            {
                                'id': 3,
                                'title': 'Javascript',
                                'level': 4.5,
                                'img': './static/images/javascript.png',
                                'description': 'I have used Javascript for several academic and professional projects.'
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .icon {
        width: 10vh;
        height: 10vh;
    }
</style>