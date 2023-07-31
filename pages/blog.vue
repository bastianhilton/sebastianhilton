<template>
    <div>
        <section data-bs-version="5.1" class="features7 cid-txzrTcMVPV" id="features7-9">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2 blogHeader">My Blog.
                            </h2>
                        </div>
                    </div>
                    <div class="row row-wrapper">
                        <div class="col-12 col-lg-4 card" v-for="post in blog" :key="post">
                            <a :href="`/blog/${post.id}`">
                                <div class="text-wrapper">
                                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                                        {{ post.name }}
                                    </h2>
                                    <a class="link-wrapper" :href="`/blog/${post.id}`">
                                        <p class="mbr-link mbr-fonts-style display-4">
                                            Read More
                                        </p>
                                    </a>
                                    <p class="mbr-desc mbr-fonts-style display-7">
                                        Published: {{ new Date(post.createdAt).toLocaleDateString() }}
                                    </p>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        {{ post.excerpt }}
                                    </p>
                                </div>
                            </a>
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
const { getItems } = useDirectusItems()

const blog = await getItems({ collection: "blog" });

    useHead({
        title: 'My Blog',
    })
</script>