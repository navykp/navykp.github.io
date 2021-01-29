<template>
    <div align="center">
        <br>
        <h1 class="text-white"><i>{{welcome}}</i></h1>
        <b-card-sub-title class="text-white">{{subhead}}</b-card-sub-title>
        <br>
        <b-card-sub-title>You can find more about me  <a href="./index.html">here</a></b-card-sub-title>
        <br>
        <b-tabs vertical fill pills justified>
            <b-tab lazy title="Human Computer Interaction and Design (HCID)"
                   active
                   title-item-class="text-white"
            >
                <video-component :video-link="hcidLink"
                                 :title="hcidTitle"
                                 :summary="hcidSummary"
                ></video-component>
            </b-tab>
            <b-tab lazy title="Autonomous Systems"
                   title-item-class="text-white"
            >
                <video-component :video-link="autoLink"
                                 :title="autoTitle"
                                 :summary="autoSummary"
                ></video-component>
            </b-tab>

        </b-tabs>
    </div>
    
</template>

<script>
    import VideoComponent from "../components/VideoComponent";
    export default {
        name: "EITApplication",
        components: {VideoComponent},
        data() {
            return {
                welcome : 'Welcome to my EIT Digital Video Application',
                subhead : 'In support of my Application to the EIT Digital Master School,' +
                    ' Please click on the tab for the corresponding track',
                hcidLink : 'https://www.youtube.com/embed/kMoyYIz6vzo',
                hcidTitle: 'Wearable Vision For the Visually Impaired',
                hcidSummary: 'A vision based device in conjunction with audio and haptic feedback' +
                    ' devices to restore autonomy of the visually impaired',
                autoLink : 'https://www.youtube.com/embed/QxuAPsP7biw',
                autoTitle: 'Automation in Air Pollution Reduction',
                autoSummary: 'A dual aerial drone system fitted with an air filter mesh to effectively tackle the problem of air pollution.'

            }
        }
    }
</script>

<style scoped>

</style>