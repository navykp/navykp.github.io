<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="col-md-4 col-sm-4 col-lg-4 center">
                    <b-img-lazy id="spot"
                                class="icon w-100"
                                blank-color="white"
                                src="./static/graphics/star2.svg"
                                v-b-popover.hover.top="'I was awarded this for Fast Learning and Contributions to projects'"
                    ></b-img-lazy>
                    <p><i>SPOT Award - Deloitte</i></p>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="certi"
                                class="icon w-100"
                                blank-color="white"
                                src="./static/graphics/certification.svg"
                                v-b-popover.hover.top="'I am a certified JSP developer'"
                    ></b-img-lazy>
                    <p><i>Oracle Certified JSP Developer</i></p>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="cpu"
                                class="icon w-100"
                                blank-color="white"
                                src="./static/graphics/star.svg"
                                v-b-popover.hover.top="'I have been consistently recognized as a high performer at Infosys'"
                    ></b-img-lazy>
                    <p><i>Insta Award - Infosys</i></p>
                </b-col>
            </b-row>
            <br>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Accomplishments"
    }
</script>

<style scoped>
.icon{
    width: 10vh;
    height: 10vh;
}
</style>