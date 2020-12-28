<template>
    <div>
        <b-button v-b-toggle="this._uid+'1'" id="jobbtn" class="w-100 jobdesc"  v-on:click="doRotate()">
            <b-card-title>{{ title }}</b-card-title>
            <b-card-text>
                <n-date :start="start" :end="end"></n-date>
            </b-card-text>
            <aside style="float: right">
                <b-icon-arrow-down :id="this._uid+'downIcon'" class="rt"></b-icon-arrow-down>
            </aside>
        </b-button>
        <b-collapse :id="this._uid+'1'" class="collapse">
            <br>
            <br>
            <b-container>
                <b-row>
                    <b-col class="col-md-6">
                    </b-col>
                    <b-col class="col-md-6">
                        <b-img-lazy class="orgIcon" :src="imgUrl(org)" alt="org"></b-img-lazy>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col class="col-md-12 desc">
                        {{ desc }}
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col class="col-md-6 ">
                        Technologies :
                        <span class="techList" v-for="t in tech" v-bind:key="t">
                            <b-img-lazy :src="imgUrl(t)"
                                        class="techIcon"
                                        alt="t"
                            ></b-img-lazy>
                        </span>
                    </b-col>
                </b-row>
            </b-container>
            <br>
            <br>
        </b-collapse>
    </div>
</template>

<script>
    import NDate from "./NDate";

    export default {
        name: "JobDesc",
        components: {NDate},
        props: ['title', 'start', 'end', 'desc', 'tech', 'org'],
        data() {
            return {}
        },
        methods: {
            imgUrl: function (name) {
                return './static/images/' + name + '.png'
            },
            doRotate: function() {
                console.log(this._uid)
                let el = document.getElementById(this._uid+'downIcon')
                el.classList.toggle('down')
            }
        },
    }
</script>

<style scoped>
    .jobdesc {
        box-shadow: 0px 10px 14px -7px #192b71;
        background: #04389a linear-gradient(to bottom, #0047cd 5%, #19408E 100%);
        border-radius: 1px;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
        text-shadow: 0px 1px 0px #071432;
        border: none
    }

    .jobdesc:hover {
        background: #04389a linear-gradient(to bottom, #19408E 5%, #0047cd 100%);
    }

    .jobdesc:active {
        position: relative;
        top: 1px;
    }

    .orgIcon {
        height: 2vw;

    }

    .collapse {
        background: rgba(91, 144, 252, 0.69);
        border-radius: 1px;


    }

    .desc {
        text-align: left;
    }

    .techList {
        alignment: left;
        display: inline-flex;
    }

    .techIcon {
        width: 5vh;
        height: 5vh;
    }

    .rt {
        -moz-transition: all .5s linear;
        -webkit-transition: all .5s linear;
        transition: all .5s linear;
    }

    .rt.down {
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
</style>