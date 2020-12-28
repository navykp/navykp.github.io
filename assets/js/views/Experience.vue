<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="col-md-12 center">
                    <b-img-lazy class="icon" src="./static/graphics/briefcase.svg"></b-img-lazy>
                    <b><i><h4>Work Experience</h4></i></b>
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
        <span class="jobs" v-for="job in joblist" v-bind:key="job.title">
                <b-card class='jobdesc' bg-variant="transparent" >
                    <job-desc :title="job.title"
                              :start="job.start"
                              :end="job.end"
                              :desc="job.desc"
                              :tech="job.tech"
                              :org="job.org"
                    ></job-desc>
                </b-card>
                </span>
        <br>
        <hr class="mb-4">
        <br>
        <b-container>
            <b-row>
                <b-col class="col-md-12 center">
                    <b-img-lazy class="icon" src="./static/graphics/olive.svg"></b-img-lazy>
                    <b><i><h4>Awards &amp; Certifications</h4></i></b>
                </b-col>
            </b-row>
            <br>
            <br>
            <accomplishments></accomplishments>
        </b-container>

    </div>
</template>

<script>
    import JobDesc from "../components/JobDesc";
    import NDate from "../components/NDate";
    import Accomplishments from "../components/Accomplishments";

    export default {
        name: "Experience.vue",
        components: {JobDesc, NDate, Accomplishments},
        data() {
            return {
                joblist: [
                    {
                        'title': 'Consultant',
                        'start': "April'19",
                        'end': "Present",
                        'desc': 'Working as a .Net Consultant with Deloitte USI (US-India) in a project that provides ' +
                            'social securities and other cash and nutritional benefits to the people who are enrolled in' +
                            ' state benefit plans in the state of Oregon, USA. Developed tools for automating' +
                            ' many tasks and taken part in firmwide events multiple times performing in front of ' +
                            'over two thousand people.',
                        'org': 'deloitte',
                        'tech': ['net']
                    },
                    {
                        'title': 'Senior Systems Engineer',
                        'start': "June'18",
                        'end': "March'19",
                        'desc': 'Worked in a project titled Retail Partner Solutions (RPS) for Intel Corporation (Client)' +
                            ' with a team of 13 members as a Senior Systems Engineer. RPS is a website (Web Application)' +
                            ' which helps Intel retailers worldwide to submit their sales-out report, request for regional' +
                            ' roles, see upload history and manage their retail accounts so that Intel can monitor and manage' +
                            ' sales of its products. Retail is one of the most important revenue creating vertical of Intel,' +
                            ' reaching up to $1 Billion.',
                        'org': 'infosys',
                        'tech': ['net', 'angular', 'html']
                    },
                    {
                        'title': 'Senior Systems Engineer',
                        'start': "October'16",
                        'end': "May'18",
                        'desc': 'Worked on a project titled Intel Pricing Administration and Reporting (IPAR) for' +
                            ' Intel Corporation (Client) with a team of 15 members as a Senior Systems Engineer. IPAR ' +
                            'is a tool used for pricing various categories of products and used for Cap sheet' +
                            ' generation and uploading the prices to SAP. This application uses Common Database architecture.',
                        'org': 'infosys',
                        'tech': ['net']
                    },
                    {
                        'title': 'Systems Engineer',
                        'start': "September'15",
                        'end': "February'16",
                        'desc': 'Worked on a project titled AIRBUS Control Specification System (Batch Application)' +
                            ' for AIRBUS (Toulouse), France with a team of 10 members as a Systems Engineer.' +
                            ' ACSS is a background batch application. It collects data by simulating real flight conditions' +
                            ' and provides the same to the manufacturer as specifications to be applied while assembling' +
                            ' the aircraft (notably, A350 and A380).',
                        'org': 'infosys',
                        'tech': ['net']
                    },


                ],
            }
        }
    }
</script>

<style scoped>
    .icon {
        width: 10vh;
        height: 10vh;
    }

    .jobs {
        display: inline;
    }
    .jobdesc{
        width: 50vw;
        border: none;
        display: inline-flex;
    }
</style>