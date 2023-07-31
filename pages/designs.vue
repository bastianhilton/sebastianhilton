<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-txzrmD8HNY" id="features1-7">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">My UX Designs.
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-4 col-sm-6 item features-image" v-for="design in design" :key="design">
                        <a class="item-link" :href="design.website">
                            <div class="item-wrapper">
                                <img :src="`${url}/assets/${design.image}`" :alt="design.name" />
                                <div class="item-sticker">
                                    <p class="mbr-text mbr-fonts-style display-4">
                                        {{ design.technology }}
                                    </p>
                                </div>
                                <div class="item-text">
                                    <h3 class="mbr-card-title mbr-fonts-style display-5">
                                        {{ design.name }}
                                    </h3>
                                    <p class="mbr-card-text mbr-fonts-style display-4">
                                        <a :href="design.website" style="color: white !important;">{{ design.website }}</a>
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
    data(){
        return {
            url: 'http://meeovicms.com:8005'
        }
    }
  }
  </script>
  
  <script setup>
const { getItems } = useDirectusItems()

const design = await getItems({ collection: "design" });

      useHead({
          title: 'My Designs',
      })
  </script>