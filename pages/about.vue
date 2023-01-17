<template>
    <div>
        <section data-bs-version="5.1" class="header14 cid-tt94AtUIQB mbr-fullscreen mbr-parallax-background"
            id="header14-8">




            <div class="mbr-overlay" style="opacity: 0.1; background-color: rgb(255, 255, 255);"></div>

            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-md-6 image-wrapper">
                        <img src="../assets/assets/images/2.jpg" alt="Mobirise Website Builder">
                    </div>
                    <div class="col-12 col-md">
                        <div class="text-wrapper">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-7">
                                <strong>Sebastian Hilton /&gt;</strong><br><strong>UX Designer, Front End Developer,
                                    Writer</strong></h1>
                            <p class="mbr-text mbr-fonts-style display-7" v-for="about in about" :key="about">
                                {{ about.description }}</p>
                            <div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4"
                                    href="https://www.github.com/bastianhilton" target="_blank">Official Github</a> <a
                                    class="btn btn-primary display-4" href="https://www.twitter.com/bastianhilton"
                                    target="_blank">Official Twitter</a>
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
        title: 'About Me',
    })

    const { data: about } = await useAsyncData('about', () => queryContent('/about').find())
</script>