<template>
    <div>
        <section data-bs-version="5.1" class="content7 cid-txzqCUPk3D mbr-fullscreen" id="content7-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="row row-wrapper" v-for="about in about.data" :key="about">
                        <div class="col-12 col-lg-6 image-card">
                            <div class="image-wrapper">
                                <img :src="`${url}/assets/${about.image}`" :alt="about.name" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 text-card">
                            <div class="text-wrapper">
                                <h2 class="mbr-section-title mbr-fonts-style display-2">{{ about.name }}</h2>
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
  data(){
      return {
          url: 'http://meeovicms.com:8005'
      }
  }
}
</script>

<script setup>
    useHead({
        title: 'About Me',
    })

const { $directus } = useNuxtApp()

const { data: about } = await useAsyncData('about', () => {
  return $directus.items('about').readByQuery({})
})
</script>