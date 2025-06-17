<template>
  <div>
    <welcome />
    <about id="aboutSection" />
    <relatedPortfolio />
    <relatedSkills />
    <relatedArticles />
  </div>
</template>

<script setup>
    import about from '~/components/pages/homepage/about.vue'
    import welcome from '~/components/pages/homepage/welcome.vue'
    import relatedPortfolio from '~/components/pages/homepage/relatedPortfolio.vue'
    import relatedSkills from '~/components/pages/homepage/relatedSkills.vue'
    import relatedArticles from '~/components/pages/homepage/relatedArticles.vue'

    useHead({
        title: 'Sebastian Hilton Official Website',
    })
</script>