<template>
    <b-card style="border: none; width: 20vw" bg-variant="transparent">
        <b-img-lazy
                :id="this._uid+'img'"
                :src="img"
                height="50vh"
                width="50vh"
        ></b-img-lazy>
        <b-card-body>
            <b-form-rating
                    size="lg"
                    no-border
                    color="white"
                    readonly
                    class="mb-2 bg-transparent throb"
                    :value="skillLevel"></b-form-rating>
        </b-card-body>
        <b-popover
                variant="primary"
                :target="this._uid+'img'" triggers="hover" placement="top">
			<template v-slot:title>{{title}}</template>
			{{ description }}
		</b-popover>
    </b-card>
</template>

<script>
    export default {
        name: "SkillDisplay",
        props: ['title', 'description', 'skillLevel', 'img']
    }
</script>

<style scoped>
.throb {
    -webkit-border-radius: 50%;
    -webkit-animation: pulsate 2s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0;
    z-index: 999;
}


@-webkit-keyframes pulsate {
    0% {
        -webkit-transform: scale(1.0, 1.0); opacity: 1.0;
    }
    50% {
        -webkit-transform: scale(0.99, 0.99); opacity: 0.8;
    }
    100% {
        -webkit-transform: scale(1.0, 1.0); opacity: 1.0;
    }
}
</style>