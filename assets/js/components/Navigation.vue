<template>
    <b-navbar class="nkpnav" >
        <b-navbar-nav class="nav-fill w-100 h-100">
            <b-nav-item>
                <router-link class="w-100 h-100 flex-fill bg-transparent nkplink"
                             to="/profile" tag="button">Profile</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="w-100 h-100 flex-fill bg-transparent nkplink"
                             to="/experience" tag="button">Experience</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="w-100 h-100 flex-fill bg-transparent nkplink"
                             to="/skills" tag="button">Skills</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="w-100 h-100 flex-fill bg-transparent nkplink"
                             to="/academics" tag="button">Academics</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="w-100 h-100 flex-fill bg-transparent nkplink"
                             to="/contact" tag="button">Contact</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>
.nkpnav{
    width: 80%;
    background: linear-gradient(-45deg, #24292f, #2a2f32, #2c3336, #24252a);
    border-radius: 1vh;
}
    .nkplink{
    text-decoration: none;
    color: white;
    font-size: 2vh;
    border: none;
}
</style>