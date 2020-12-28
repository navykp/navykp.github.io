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
                    'projects': [
                        {'name': 'Text Recognition in Natural Images',
                        'desc': 'I developed an text recognition algorithm for detecting text in natural images.' +
                            ' I utilize classic image recognition techniques to extract the text features in a natural image' +
                            'detect edges and calculate the text image. Illustration below shows the algorithmic flow' +
                            ' The final output is passed through an OCR for reading the detected text.',
                        'img': './static/images/text_recognition.png',
                        'techs': ['./static/images/matlab.png'],
                        'website': 'null'},
                        {'name': 'Criminal Identification Information System',
                        'desc': 'I developed a Criminal Identification Information System in Java.' +
                            'A User can upload information/ report crimes/ and identify criminals by specifying the' +
                            ' features of a criminals face',
                        'techs': ['./static/images/java.png'],
                        'img': 'null',
                        'website': 'https://pmath2012.wixsite.com/projectreport/gui'},
                        {'name': 'Digital Directory Management System',
                            'desc': 'In this project I implemented a skeleton information system using C and SQL database.' +
                                'The work involved developing a graphical UI using C graph library and interfacing' +
                                ' with the database  and providing a detailed information retrieval UI',
                            'img': 'null', 'techs': ['./static/images/c.png', './static/images/mysql.png'], 'website':'null'},
                        {'name': 'Pulse Width Modulator',
                            'desc': 'In this project I implemented a pulse width modulator using physical Integrated Circuits' +
                                ' and operational amplifiers.',
                            'img':'null', 'techs': null, 'website':'null'}],
                    'extras': [{'name': 'Drama & Theater'}, {'name':'Model United Nations'}],
                    'img': './static/images/jiit.png'
                },
                intermediate: {
                    'degree': 'All India Secondary School Certificate (SSC)',
                    'specialization': 'Physics, Chemistry, Mathematics',
                    'subjects': null,
                    'projects': null,
                    'extras': null,
                    'img': './static/graphics/academics.svg'
                },
                highSchool: {
                    'degree': 'Indian Certificate of Secondary Education (ICSE)',
                    'specialization': 'Mathematics, Physics, Chemistry',
                    'subjects': 'English, Social Studies, Biology ',
                    'projects': null,
                    'extras': null,
                    'img': './static/graphics/academics.svg'
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