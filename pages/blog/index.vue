<!-- ./pages/blog/index.vue -->

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));

// set meta for page
useHead({
  title: "All posts",
  meta: [{ name: "description", content: "Here's a list of all my great posts" }],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All posts</h1>
        <p class="font-medium text-lg">Here's a list of all my great posts</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />

      <!-- Render list of all posts in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="post-list">
            <li v-for="post in list" :key="post._path" class="post-item">
              <NuxtLink :to="post._path">
                <div class="wrapper">
                  <div class="img-cont w-32 shrink-0">
                    <img :src="`/${post.img}`" :alt="post.title" class="rounded-lg max-h-[8rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ post.title }}</h1>
                    <p>{{ post.description }}</p>
                    <ul class="post-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in post.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No posts found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>