<template>
    <div>
        <section data-bs-version="5.1" class="content5 cid-txzIsjSvT1 mbr-fullscreen" id="content5-d">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 blur-wrapper">
                        <div class="blur-circle"></div>
                        <div class="blur-text">
                            <h1 class="mbr-blur-title mbr-fonts-style display-1">
                                <strong>{{ blog.name }}</strong></h1>
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
                                <strong>{{ blog.createdAt }}</strong>
                            </h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="text-wrapper">
                            <p class="mbr-text mbr-fonts-style display-2">
                                {{ blog.description }}
                            </p>
                        </div>
                    </div>
                    <div class="blur-circle"></div>
                </div>
            </div>
        </section>

<section data-bs-version="5.1" class="social1 cid-tt95ELfDUn" id="share1-b">
<div class="container">
    <div class="media-container-row">
        <div class="col-12">
            <h3 class="mbr-section-title mb-3 align-center mbr-fonts-style display-2">
                <strong>Share this Page!</strong>
            </h3>
            <div>
                <div class="mbr-social-likes align-center">
                    <span class="btn btn-social socicon-bg-facebook facebook m-2">
                        <i class="socicon socicon-facebook"></i>
                    </span>
                    <span class="btn btn-social twitter socicon-bg-twitter m-2">
                        <i class="socicon socicon-twitter"></i>
                    </span>
                    <span class="btn btn-social vkontakte socicon-bg-vkontakte m-2">
                        <i class="socicon socicon-vkontakte"></i>
                    </span>
                    <span class="btn btn-social odnoklassniki socicon-bg-odnoklassniki m-2">
                        <i class="socicon socicon-odnoklassniki"></i>
                    </span>
                    <span class="btn btn-social pinterest socicon-bg-pinterest m-2">
                        <i class="socicon socicon-pinterest"></i>
                    </span>
                    <span class="btn btn-social mailru socicon-bg-mail m-2">
                        <i class="socicon socicon-mail"></i>
                    </span>
                </div>
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
const { getItemById } = useDirectusItems();
const route = useRoute();

const blog = await getItemById({ collection: "blog", id: route.params.id });
if (!blog) throwError("No article found, 404");

useHead({
  title: blog.name,
  meta: [
    { name: "description", content: blog.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://www.sebastianhilton.com/${blog.image}`,
    },
  ],
});
</script>

<style>

</style>
