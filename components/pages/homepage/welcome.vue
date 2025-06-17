<template>
    <div>
        <section data-bs-version="5.1" class="header1 cid-uOhXv18nPY" id="header1-1">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="right-side">
                            <h5 class="mbr-section-title mbr-fonts-style display-1" style="text-align: center;">
                                <strong>{{ welcomeBlock?.specs?.[0]?.name }}</strong>
                            </h5>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                {{ welcomeBlock?.specs?.[1]?.name }}
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                {{ welcomeBlock?.specs?.[2]?.name }}
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                <NuxtLink :href="welcomeBlock?.specs?.[7]?.url">{{ welcomeBlock?.specs?.[3]?.name }}</NuxtLink>
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                {{ welcomeBlock?.specs?.[4]?.name }}
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                {{ welcomeBlock?.specs?.[5]?.name }}
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                {{ welcomeBlock?.specs?.[6]?.name }}
                            </p>
                            <p class="mbr-text mbr-fonts-style display-4" style="text-align: center;">
                                <NuxtLink :href="welcomeBlock?.specs?.[8]?.url">{{ welcomeBlock?.specs?.[9]?.name }}</NuxtLink>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="gray">
                            <img :src="`${$directus?.url}/assets/${welcomeBlock?.image?.filename_disk}`" :alt="welcomeBlock?.name" class="align">
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
        data: welcomeBlock
    } = await useAsyncData('welcomeBlock', () => {
        return $directus.request($readItem('blocks', '1', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>