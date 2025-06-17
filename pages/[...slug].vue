<template>
  <div class="contentPage">
    <!--<div v-if="page?.name === 'Skills'">
      <skillsPage />
    </div>
    <div v-if="page?.name === 'Designs'">
      <designsPage />
    </div>
    <div v-if="page?.name === 'Portfolio'">
      <portfolioPage />
    </div>
    <div v-if="page?.name === 'Blog'">
      <blogPage />
    </div>-->
    <div>
      <div v-html="page?.content" />
    </div>
  </div>
</template>

<script setup>
//import skillsPage from '~/components/pages/skills.vue'
//import designsPage from '~/components/pages/designs.vue'
//import portfolioPage from '~/components/pages/portfolio.vue'
//import blogPage from '~/components/pages/blog.vue'

const route = useRoute();
const { $directus, $readItem } = useNuxtApp()

const {
  data: page
} = await useAsyncData('page', () => {
  return $directus.request($readItem('pages', {
    filter: {
      slug: { _eq: `${route.params.slug}` }
    },
    fields: ['*'],
    limit: 1
  })).then(response => response?.[0]) // Get first item from response
})

useHead({
  title: page?.value?.name || 'Page',
})
</script>
