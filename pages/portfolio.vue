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
                    <div class="col-12 col-lg-3 col-md-4 col-sm-6 item features-image" v-for="work in data.PortfolioItems.items" :key="work">
                        <a class="item-link" :href="work.content.website.url">
                            <div class="item-wrapper">
                                <img :src="`${work.content.image.filename}`" :alt="work.name" />
                                <div class="item-sticker">
                                    <p class="mbr-text mbr-fonts-style display-4">
                                        {{ work.content.technology }}
                                    </p>
                                </div>
                                <div class="item-text">
                                    <h3 class="mbr-card-title mbr-fonts-style display-5">
                                        {{ work.name }}
                                    </h3>
                                    <p class="mbr-card-text mbr-fonts-style display-4" v-html="work.content.description"></p>
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
      }
  }
}
</script>
  
  <script setup>
  const query = gql`
  query {
  PortfolioItems {
    items {
      name
      content {
        description
        technology
        website {
          url
        }
        image {
          filename
        }
      }
    }
  }
}
`

const { data } = await useAsyncQuery(query)
/*const { getItems } = useDirectusItems()

const portfolio = await getItems({ collection: "portfolio" }); */

      useHead({
          title: 'My Portfolio',
      })
  </script>