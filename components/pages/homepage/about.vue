<template>
    <div>
        <section data-bs-version="5.1" class="header2 cid-uOhXvD20kg" id="header2-2">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-lg-6 b">
                        <div class="gray">
                            <img src="assets/images/sq2.jpg" alt="" class="align first">
                            <img :src="`${$directus?.url}/assets/${aboutBlock?.image?.filename_disk}`" :alt="aboutBlock?.name" class="align second">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 t">
                        <div class="right-side">
                            <h5 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>{{ aboutBlock?.name }}</strong>
                            </h5>
                            <p class="mbr-text mbr-fonts-style display-4" v-html="aboutBlock?.specs?.[0]?.description"></p>
                            <ul class="list mbr-fonts-style display-4">
                                <li><strong>{{ aboutBlock?.specs?.[0]?.name }}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: aboutBlock
    } = await useAsyncData('aboutBlock', () => {
        return $directus.request($readItem('blocks', '2', {
            fields: ['*', 'image.*.*'],
        }))
    })
</script>