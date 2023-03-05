<template>
    <div>
        <section data-bs-version="5.1" class="features7 cid-txzrTcMVPV" id="features7-9">
            <div class="container-fluid">
                <div class="row">
                    <div class="row row-wrapper">
                        <div class="col-12 col-lg-4 card" v-for="post in post" :key="post">
                            <a :href="`/blog/${post.title}`">
                                <div class="text-wrapper">
                                    <h2 class="mbr-section-title mbr-fonts-style display-2">
                                        {{ post.title }}
                                    </h2>
                                    <a class="link-wrapper" :href="`/blog/${post.title}`">
                                        <p class="mbr-link mbr-fonts-style display-4">
                                            Read More
                                        </p>
                                    </a>
                                    <p class="mbr-desc mbr-fonts-style display-7">
                                        Published: {{ post.date }}
                                    </p>
                                    <p class="mbr-desc mbr-fonts-style display-7">
                                        <strong>{{ post.tags }}</strong> Published: {{ post.date }}
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
    useHead({
        title: 'My Blog',
    })
    const {
        data: post
    } = await useAsyncData('blog', () => queryContent('/posts/').sort({
        date: -1
    }).find())
</script>