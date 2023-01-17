<template>
    <div>
        <section data-bs-version="5.1" class="features3 cid-tt93lNy0Nk" id="features3-5">
    
    <div class="mbr-overlay"></div>
    <div class="container">
        <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>My Portfolio</strong></h4>
            
        </div>
        <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-4" v-for="work in work" :key="work">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="../assets/images/cosmos-4888643_1920.jpg" :alt="work.title">
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-7"><strong>{{ work.title }}</strong></h5>
                        <h6 class="item-title mbr-fonts-style display-8"><strong>{{ work.tags }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ work.description }}</p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a :href="work.link" class="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
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
      useHead({
          title: 'My Portfolio',
      })
      const { data: work } = await useAsyncData('portfolio', () => queryContent('/portfolio/').find())
  </script>