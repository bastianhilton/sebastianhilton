<template>
    <div>
        <section data-bs-version="5.1" class="features2 cid-txzqQ2H7gW" id="features2-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-5 title">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                               My set of<br> <span>amazing skills</span>.
                            </h2>
                            <p class="mbr-text mbr-fonts-style display-7">
                                From UX/UI Designer to Front-end Development
                            </p>
                        </div>
                    </div>
                    <div class="col-4 cards-wrapper" v-for="skill in skills.data" :key="skill">
                        <div class="row cards">
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        {{ skill.name }}</h3>
                                </div>
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
const { $directus } = useNuxtApp()

const { data: skills } = await useAsyncData('skills', () => {
  return $directus.items('skills').readByQuery({})
})
    useHead({
        title: 'My Skills',
    })
</script>