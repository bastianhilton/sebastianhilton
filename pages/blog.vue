<template>
    <div>
        <section data-bs-version="5.1" class="features4 cid-tt9438E08b" id="features4-7">
    
    <div class="mbr-overlay"></div>
    <div class="container">
        <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>My Blog</strong></h4>
            
        </div>
        <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-4" v-for="post in post" :key="post._path">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="../assets/assets/images/mainbackground-1920x1440.jpg" :alt="post.title" :title="post.title">
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5"><strong>{{ post.title }}</strong></h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">{{ post.tags }}</h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ post.description }}</p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a :href="post._path" class="btn item-btn btn-black display-7">Read More
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
          title: 'My Blog',
      })
      const { data: post } = await useAsyncData('blog', () => queryContent('/posts/').sort({ date: -1 }).find())
  </script>