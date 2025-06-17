<template>
    <div>
        <section data-bs-version="5.1" class="features2 cid-uOhYh0TXdg" id="features2-c">
            <div class="container">
                <h3 class="mbr-section-title mbr-fonts-style mbr-info display-2"><strong>My Designs</strong></h3>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 item features-image" v-for="designs in designs"
                        :key="designs.id">
                        <div class="shadow item-wrapper">
                            <div class="wrap-img item-img">
                                <img :src="`${$directus.url}/assets/${designs?.image?.filename_disk}`"
                                    :alt="designs?.name" class="inner">
                            </div>
                            <div class="card-wrapper">
                                <h5 class="card-title mbr-fonts-style display-5"><strong>{{ designs?.name }}</strong>
                                </h5>
                                <h5 class="card-text mbr-fonts-style display-4" v-html="designs?.description"></h5>
                                <div class="row link-row justify-content-between">
                                    <div class="col-auto">
                                        <h5 class="link-title mbr-fonts-style display-4"><span
                                                class="mobi-mbri mobi-mbri-play mbr-iconfont mbr-iconfont-btn"></span>
                                            <NuxtLink :href="designs?.url" class="text-black"><strong>Read More</strong></NuxtLink>
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <h5 class="number mbr-fonts-style display-4" v-html="designs?.technology?.[0]?.name"></h5>
                                    </div>
                                </div>
                            </div>
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
        $readItems,
        $readItem,
    } = useNuxtApp()

    const {
        data: designs
    } = await useAsyncData('designs', () => {
        return $directus.request($readItems('portfolio', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                type: {
                    _eq: 'design'
                }
            }
        }))
    })

    useHead({
        title: 'My Designs',
    })
</script>