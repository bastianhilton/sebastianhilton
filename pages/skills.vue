<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-tt90Bj5uCp mbr-parallax-background" id="features1-3" style="height:100vh;">
            <div class="mbr-overlay" style="opacity: 0.1; background-color: rgb(255, 255, 255);">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9">
                        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Skills</strong></h3>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-4 col-md-6 col-lg-3" v-for="skill in skill" :key="skill">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <h5 class="card-title mbr-fonts-style display-7"><strong>{{ skill.title }}</strong></h5>
                                <p class="card-text mbr-fonts-style display-7">{{ skill.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'My Skills',
    })
    const {
        data: skill
    } = await useAsyncData('skills', () => queryContent('/skills/').find())
</script>