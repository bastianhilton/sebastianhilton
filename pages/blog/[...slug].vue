<template>
  <div>
    <section data-bs-version="5.1" class="info3 cid-tt95v8YZpq" id="info3-a">

    

    
<div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
</div>

<div class="container">
    <div class="row justify-content-center">
        <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
                <div class="card-box align-center">
                    <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                        <strong>{{ data.post.title }}</strong>
                    </h4>
                    <p class="mbr-text mbr-fonts-style mb-4 display-7">
                        {{ data.post.tags }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section data-bs-version="5.1" class="content7 cid-tt95ql8vb7" id="content7-9">

<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12">
            <blockquote>
            <h5 class="mbr-section-title mbr-fonts-style mb-2 display-7"><strong>{{ data.post.date }}</strong></h5>
            <p class="mbr-text mbr-fonts-style display-4">{{ data.post.description }}</p></blockquote>
        </div>
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
  import RelatedPosts from '../../components/RelatedPosts.vue'

  export default {
    components: {
      RelatedPosts
    },
  }

</script>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {

  // fetch document where the document path matches with the cuurent route
  let post = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
  return {
    post: await post,
    surround: await surround,
  };
});

useHead({
  title: data.value.post.title,
  meta: [
    { name: "description", content: data.value.post.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.post.img}`,
    },
  ],
});
</script>

<style>

</style>
