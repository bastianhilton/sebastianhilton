<template>
    <div>
        <section data-bs-version="5.1" class="features4 cid-uOhYQ0Nsqm" id="features4-l">




            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="shadow">
                            <div class="row al">
                                <div class="col-auto">
                                    <div class="wrap-img">
                                        <img :src="`${$directus.url}/assets/${article?.image?.filename_disk}`"
                                            :alt="article?.name" class="inner">
                                    </div>
                                </div>
                                <div class="col-12 col-sm right">
                                    <div class="top">
                                        <div class="align">
                                            <h4 class="button-color mbr-fonts-style display-4">{{ article?.tags }}</h4>
                                        </div>
                                        <h5 class="card-title mbr-fonts-style display-2">
                                            <strong>{{ article?.name }}</strong>
                                        </h5>
                                        <h5 class="card-text mbr-fonts-style display-4" v-html="article?.excerpt"></h5>
                                    </div>
                                    <div class="bottom">
                                        <div>

                                        </div>
                                        <div class="mbr-social-likes">
                                            <span class="btn btn-social socicon-bg-youtube youtube mx-2">
                                                <span class="mbr-iconfont socicon-youtube socicon"></span>
                                            </span>
                                            <span class="btn btn-social socicon-bg-facebook facebook mx-2">
                                                <span class="mbr-iconfont socicon-facebook socicon"></span>
                                            </span>
                                            <span class="btn btn-social twitter socicon-bg-twitter mx-2">
                                                <span class="mbr-iconfont socicon-twitter socicon"></span>
                                            </span>
                                            <span class="btn btn-social pinterest socicon-bg-pinterest mx-2">
                                                <span class="mbr-iconfont socicon-pinterest socicon"></span>
                                            </span>
                                            <span class="btn btn-social mailru socicon-bg-mail mx-2">
                                                <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="article8 cid-uOhYFCCXLE" id="article8-j">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="row">
                            <div class="col-12">
                                <h4 class="heading mbr-fonts-style mbr-section-title display-2">
                                    <strong>{{ article?.name }}</strong></h4>
                                <p class="mbr-text mbr-fonts-style p p1 display-4" v-html="article?.description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features9 cid-uOhYLLpgAd" id="features9-k">




            <div class="container">
                <div class="row">
                    <div class="wrapper col-12 col-md-8">
                        <h3 class="t1 mbr-fonts-style display-2">
                            <strong>Licenses</strong>
                        </h3>
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-4" v-html="article?.license"></h3>
                        <h3 class="mbr-section-title mbr-fonts-style display-5" v-if="article?.source">
                            <strong>Sources</strong></h3>
                        <h3 class="mbr-section-subtitle mbr-fonts-style display-4">
                            <NuxtLink :href="article?.source?.[0]?.url" class="text-black">
                                {{ article?.source?.[0]?.name }}</NuxtLink>,&nbsp;
                        </h3>

                    </div>
                </div>
            </div>
        </section>

        <div class="row">
            <div class="col">
                <relatedArticles />
            </div>
        </div>
    </div>
</template>

<script setup>
    import relatedArticles from '~/components/pages/homepage/relatedArticles.vue'

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: article
    } = await useAsyncData('article', () => {
        return $directus.request($readItem('article', {
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
            fields: ['*'],
            limit: 1
        })).then(response => response?.[0]) // Get first item from response
    })

    useHead({
        title: computed(() => article?.value?.name || 'Article Page')
    })
</script>