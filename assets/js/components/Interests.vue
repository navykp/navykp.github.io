<template>
    <div>
        <br>
        <br>
        <b-container>
            <b-row>
                <b-col class="col-md-12"><b><i>My Interests &amp; Hobbies</i></b></b-col>
            </b-row>
            <br>
            <br>
            <b-row>
                <b-col class="col-md-4">
                    <b-img-lazy id="guitar"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/guitar.svg"
                                v-b-popover.hover.top="'Playing Guitar and Listening to music'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4">
                    <b-img-lazy id="planet"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/planet.svg"
                                v-b-popover.hover.top="'Learning about the mysterious universe'"
                    ></b-img-lazy>
                </b-col>
                <b-col class="col-md-4">
                    <b-img-lazy id="cpu"
                                class="icon h-100"
                                blank-color="white"
                                src="./static/graphics/cpu.svg"
                                v-b-popover.hover.top="'Building and taking apart technical equipment'"
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