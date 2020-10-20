<template>
    <div>
        <br>
        <b-container>
            <b-row>
                <b-col class="col-md-12">
                    <b><i> About Me </i></b>
                </b-col>
            </b-row>
            <br>
            <b-row>
            <b-col class="col-md-1"><b-icon-chevron-double-left class="h-100"></b-icon-chevron-double-left></b-col>
        <b-col>
            <i>
            <p class="introtext">{{ abt }}</p>
            <p class="introtext">{{ subIntro }}</p>
        </i></b-col>
                <b-col class="col-md-1"><b-icon-chevron-double-right class="h-100"></b-icon-chevron-double-right></b-col>
            </b-row>
            </b-container>
    </div>
</template>

<script>
    export default {
        name: "About",
        props: ['abt', 'subIntro']
    }
</script>

<style scoped>
    .introtext {;
    }
</style>