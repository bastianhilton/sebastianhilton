<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-txzrmD8HNY" id="features1-7">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">My Porfolio.
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-4 col-sm-6 item features-image" v-for="work in work" :key="work">
                        <a class="item-link" :href="work.link">
                            <div class="item-wrapper">
                                <img :src="work.img" alt="">
                                <div class="item-sticker">
                                    <p class="mbr-text mbr-fonts-style display-4">
                                        {{ work.tags }}
                                    </p>
                                </div>
                                <div class="item-text">
                                    <span class="mbr-iconfont socicon socicon-facebook"></span>
                                    <h3 class="mbr-card-title mbr-fonts-style display-5">
                                        {{ work.title }}
                                    </h3>
                                    <p class="mbr-card-text mbr-fonts-style display-4">
                                        <a :href="work.link" style="color: white !important;">{{ work.link }}</a>
                                    </p>
                                </div>
                            </div>
                        </a>
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
      useHead({
          title: 'My Portfolio',
      })
      const { data: work } = await useAsyncData('portfolio', () => queryContent('/portfolio/').find())
  </script>