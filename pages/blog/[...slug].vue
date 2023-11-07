<template>
    <div>
        <section data-bs-version="5.1" class="content5 cid-txzIsjSvT1 mbr-fullscreen" id="content5-d">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 blur-wrapper">
                        <div class="blur-circle"></div>
                        <div class="blur-text">
                            <h1 class="mbr-blur-title mbr-fonts-style display-1">
                                <strong>{{ data.BlogItem.name }}</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="content2 cid-txzs3I8pfr" id="content2-b">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-5">
                                <strong>{{ data.BlogItem.created_at }}</strong>
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="text-wrapper">
                            <p class="mbr-text mbr-fonts-style display-2">
                                {{ data.BlogItem.content.description }}
                            </p>
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
  const query = gql`
  query {
  BlogItem (id: 1) {
      id
      name
      created_at
      content {
        description
        excerpt
        image {
          filename
        }
      }
  }
}
`

const { data } = await useAsyncQuery(query)

/*const { getItemById } = useDirectusItems();
const route = useRoute();

const blog = await getItemById({ collection: "blog", id: route.params.id });
if (!blog) throwError("No article found, 404"); */

useHead({
  title: data.BlogItem.name,
});
</script>

<style>

</style>
