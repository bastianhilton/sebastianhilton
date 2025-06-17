<template>
    <div>
        <section data-bs-version="5.1" class="features6 cid-uOhY1Ckzbk" data-interval="false" data-bs-interval="false"
            id="features6-7">
            <div class="container">
                <div class="row title-block justify-content-between">
                    <div class="col">
                        <h4 class="mbr-section-subtitle mbr-fonts-style display-2">
                            <strong>My Skills</strong>
                        </h4>
                    </div>
                    <div class="col-auto">
                        <h3 class="mbr-section-title mbr-fonts-style display-4" v-html="skillsPage?.description"></h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 item features-image" v-for="skills in skills" :key="skills.id">
                        <div class="shadow item-wrapper">
                            <div class="wrap-img item-img">
                                <img :src="`${$directus.url}/assets/${skills?.image?.filename_disk}`" :alt="skills?.name" class="inner">
                            </div>
                            <div class="card-wrapper">
                                <h5 class="card-title mbr-fonts-style display-5">
                                    <strong>{{ skills?.name }}</strong>
                                </h5>
                                <p class="card-title mbr-fonts-style display-4">
                                    <strong>{{ skills?.efficiency }}</strong>
                                </p>
                                <h5 class="card-text mbr-fonts-style display-4" v-html="skills?.description"></h5>
                            </div>
                        </div>
                    </div>
                    <div class="button-align">
                        <div class="mbr-section-btn margin"><NuxtLink class="btn btn-primary display-4" href="/portfolio">My Portfolio</NuxtLink></div>
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
        data: skills
    } = await useAsyncData('skills', () => {
        return $directus.request($readItems('skills', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: skillsPage
    } = await useAsyncData('skillsPage', () => {
        return $directus.request($readItem('pages', '1', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: 'My Skills',
    })
</script>