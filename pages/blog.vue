<template>
    <div>
        <section data-bs-version="5.1" class="features5 cid-uOhYrcVpNy" id="features5-g">
            <div>
                <div class="container">
                    <div class="row title-block" style="text-align: center;">
                        <div>
                            <h4 class="mbr-section-subtitle mbr-fonts-style display-2"><strong>Articles &amp;
                                    News</strong></h4>
                        </div>
                    </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 item features-image" v-for="post in articles" :key="post.id">
                        <div class="shadow item-wrapper">
                            <div class="wrap-img item-img">
                                <img :src="`${$directus.url}/assets/${post?.image?.filename_disk}`" :alt="post?.name" class="inner">
                            </div>
                            <div class="card-wrapper">
                                <h5 class="card-title mbr-fonts-style display-5"><strong>{{ post?.name }}</strong></h5>
                                <h5 class="card-text mbr-fonts-style display-4" v-html="post?.excerpt"></h5>
                                <div class="row link-row justify-content-between">
                                    <div class="col-auto">
                                        <h5 class="link-title mbr-fonts-style display-4"><span
                                                class="mobi-mbri mobi-mbri-play mbr-iconfont mbr-iconfont-btn"></span>
                                            <NuxtLink :href="`/article/${post?.slug}`" class="text-black"><strong>Read More</strong></NuxtLink>
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <h5 class="number mbr-fonts-style display-4"><strong>{{ post?.tags }}</strong></h5>
                                    </div>
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
        data: articles
    } = await useAsyncData('articles', () => {
        return $directus.request($readItems('article', {
            fields: ['*', {
                '*': ['*']
            }],
        }))
    })

    useHead({
        title: 'My Official Blog',
    })
</script>