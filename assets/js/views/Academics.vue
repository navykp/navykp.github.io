<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="col-md-12 center">
                    <b-img-lazy class="icon" src="./static/graphics/academics.svg"></b-img-lazy>
                    <b><i><h4>Academics</h4></i></b>
                </b-col>
            </b-row>
            <br>
            <br>
            <b-card bg-variant="transparent" border-variant="transparent" no-body>
                <b-tabs v-model="tabIdx"
                        content-class="mt-3" justified
                >
                    <b-tab title="Undergraduate" :title-link-class="getClass(0)" active>
                        <education
                                :img="bachelors.img"
                                :degree="bachelors.degree"
                                :specialization="bachelors.specialization"
                                :extras="bachelors.extras"
                                :projects="bachelors.projects"
                                :subjects="bachelors.subjects"
                        ></education>
                    </b-tab>
                    <b-tab title="High School" :title-link-class="getClass(1)" >
                        <education
                                :img="highSchool.img"
                                :degree="highSchool.degree"
                                :specialization="highSchool.specialization"
                                :extras="highSchool.extras"
                                :projects="highSchool.projects"
                                :subjects="highSchool.subjects"
                        ></education>
                    </b-tab>
                    <b-tab title="Intermediate" :title-link-class="getClass(2)" >
                        <education
                                :img="intermediate.img"
                                :degree="intermediate.degree"
                                :specialization="intermediate.specialization"
                                :extras="intermediate.extras"
                                :projects="intermediate.projects"
                                :subjects="intermediate.subjects"
                        ></education>
                    </b-tab>

                </b-tabs>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import Education from "../components/Education";
    export default {
        name: "Academics",
        components: {Education},
        data() {
            return {
                tabIdx : 0,
                bachelors: {
                    'degree': '  Bachelors of Technology',
                    'specialization': '  Electronics & Communications Engineering',
                    'subjects': '  Image processing & Information Systems',
                    'projects': [{'name': 'Text Recognition in Natural Images'},
                        {'name': 'Criminal Identification Information System'},
                        {'name': 'Digital Directory Management System'},
                        {'name': 'Pulse Width Modulator'}],
                    'extras': [{'name': 'Drama & Theater'}, {'name':'Model United Nations'}],
                    'img': './static/images/jiit.png'
                },
                intermediate: {
                    'degree': 'All India Secondary School Certificate (SSC)',
                    'specialization': 'Physics, Chemistry, Mathematics',
                    'subjects': null,
                    'projects': null,
                    'extras': null,
                    'img': './static/images/stjo.png'
                },
                highSchool: {
                    'degree': 'Indian Certificate of Secondary Education (ICSE)',
                    'specialization': 'Mathematics, Physics, Chemistry',
                    'subjects': 'English, Social Studies, Biology ',
                    'projects': null,
                    'extras': null,
                    'img': './static/images/stjo.png'
                }
            }
        },
        methods: {
            getClass: function(idx){
                if (this.tabIdx==idx){
                    return ['font-weight-bold', 'text-dark']
                }else{
                    return ['font-weight-bold', 'text-light']
                }
            }
        }
    }
</script>

<style scoped>
    .icon {
        width: 10vh;
        height: 10vh;
    }

    .edutab {
        background: transparent;
        color: white;
    }

</style>