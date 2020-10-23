<template>
    <div>
        <br>
        <br>
        <b-container>
            <b-row>
                <b-col class="col-md-12 col-sm-12 col-lg-12"><b><i>My Interests &amp; Hobbies</i></b></b-col>
            </b-row>
            <br>
            <br>
            <b-row>
                <b-col class="col-md-4 col-sm-4 col-lg-4">
                    <b-img-lazy id="guitar"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/guitar.svg"
                                v-b-popover.hover.top="'I love Playing Guitar and Listening to music'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="planet"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/planet.svg"
                                v-b-popover.hover.top="'I am intrigued by the mysterious universe'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="cpu"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/cpu.svg"
                                v-b-popover.hover.top="'I love Building and taking apart technical equipment'"
                    ></b-img-lazy>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="col-md-4 col-sm-4 col-lg-4">
                    <b-img-lazy id="singer"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/singer.svg"
                                v-b-popover.hover.top="'I Enjoy Singing: Welcome to Hotel California!'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="theater"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/theater.svg"
                                v-b-popover.hover.top="'The World is a Stage and I love being on it.'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4 col-lg-4 col-sm-4">
                    <b-img-lazy id="docu"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/cinema.svg"
                                v-b-popover.hover.top="'I enjoy watching documentaries and exploring the obscure'"
                    ></b-img-lazy>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Interests"
    }
</script>

<style scoped>
.icon{
    width: 10vh;
    height: 10vh;
}
</style>