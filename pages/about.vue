<template>
    <div>
        <section data-bs-version="5.1" class="content7 cid-txzqCUPk3D mbr-fullscreen" id="content7-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="row row-wrapper" v-for="about in about" :key="about">
                        <div class="col-12 col-lg-6 image-card">
                            <div class="image-wrapper">
                                <img :src="about.img" :alt="about.title">
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 text-card">
                            <div class="text-wrapper">
                                <h2 class="mbr-section-title mbr-fonts-style display-2">Hey, I'm Sebastian</h2>
                                <a class="link-wrapper" href="#">
                                    <p class="mbr-link mbr-fonts-style display-4">
                                        {{ about.title }}
                                    </p>
                                </a>
                                <p class="mbr-text mbr-fonts-style display-7">
                                    {{ about.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="blur-circle"></div>
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