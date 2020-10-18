<template>
    <div>
        <b-navbar class="nkpsocialnav">
            <b-navbar-nav class="w-100 h-100 nav-fill">
                <b-nav-item href="https://www.facebook.com/navikp">
                    <b-img-lazy class="nkicon" src="./static/images/fb.png"></b-img-lazy>
                </b-nav-item>
                <b-nav-item href="https://www.instagram.com/navendupathak/">
                    <b-img-lazy class="nkicon" src="./static/images/insta.png"></b-img-lazy>
                </b-nav-item>
                <b-nav-item href="https://www.linkedin.com/in/navendu-pathak-587179a9/">
                    <b-img-lazy class="nkicon" src="./static/images/linkedin.png"></b-img-lazy>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <p class="nktext"> Feel Free to reach out: <a href="mailto:navendu1102379@gmail.com">Navendu Krishna</a></p>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.nkpsocialnav{
    background: transparent;
    width: 20%;
    display: flex;
}
.nkicon{
    width: 2vw;
    height: 2vw;
}
.nktext{
    color: white;
    font-size: 0.5vw;
}
</style>