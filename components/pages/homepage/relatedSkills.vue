<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-uOhXxGSPzg" id="features1-3" v-if="skills">
            <div class="container">

                <div class="row title-block justify-content-between">
                    <div class="col">
                        <h4 class="mbr-section-subtitle mbr-fonts-style display-2"><strong>Latest Skills</strong></h4>
                    </div>
                    <div class="col-auto">
                        <div class="mbr-section-btn"><NuxtLink class="btn btn-secondary display-4" href="/skills">Browse Skills</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 item features-image" v-for="skills in skills" :key="skills.id">
                        <div class="shadow item-wrapper">
                            <div class="wrap-img item-img">
                                <img :src="`${$directus.url}/assets/${skills?.image?.filename_disk}`" :alt="skills?.name" class="inner">
                            </div>
                            <div class="card-wrapper">
                                <h5 class="card-title mbr-fonts-style display-5"><strong>{{ skills?.name }}</strong></h5>
                                <h5 class="card-text mbr-fonts-style display-4" v-html="skills?.description"></h5>
                                <div class="row link-row justify-content-between">
                                    <div class="col-auto">

                                    </div>
                                    <div class="col-auto">
                                        <h5 class="number mbr-fonts-style display-4"><strong>{{ skills?.efficiency }}</strong></h5>
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
        data: skills
    } = await useAsyncData('skills', () => {
        return $directus.request($readItems('skills', {
            fields: ['*', {
                '*': ['*']
            }],
            limit: 3
        }))
    })
</script>