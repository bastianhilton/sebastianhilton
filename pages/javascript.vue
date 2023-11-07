<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-txzrmD8HNY" id="features1-7">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">My Javascript Projects.
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-4 col-sm-6 item features-image" v-for="javascript in data.JavascriptItems.items" :key="javascript">
                        <a class="item-link" :href="javascript.content.url.url">
                            <div class="item-wrapper">
                                <img :src="`${javascript.content.image.filename}`" :alt="javascript.content.name" />
                                <div class="item-sticker">
                                    <p class="mbr-text mbr-fonts-style display-4">
                                        {{ javascript.content.version }}
                                    </p>
                                </div>
                                <div class="item-text">
                                    <h3 class="mbr-card-title mbr-fonts-style display-5">
                                        {{ javascript.description }}
                                    </h3>
                                    <p class="mbr-card-text mbr-fonts-style display-4">
                                        <a :href="javascript.content.url.url" style="color: white !important;">{{ javascript.content.url.url }}</a>
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
  const query = gql`
    query {
  JavascriptItems {
    items {
      content {
        name
        version
        description
        url {
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

const design = await getItems({ collection: "design" });*/

      useHead({
          title: 'Javascript',
      })
  </script>