<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
  return queryCollection('blogs')
    .select('title', 'path', 'description', 'date', 'tags', 'image', 'category')
    .all()
})
</script>

<template>
  <main class="text-white min-h-screen">
    <SharedHero heading="Blog" description="Check out our blogs" />
    <UContainer class="pt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="blog in blogs" :key="blog.path">
        <nuxt-link :to="blog.path">
          <NuxtImg :src="blog.image" :alt="blog.title" class="rounded-lg" />
          <h2>{{ blog.title }}</h2>
          <div>
            <span>{{ blog.category }}</span>
            <time :datetime="blog.date" class="block">{{ new Date(blog.date).toLocaleDateString() }}</time>
          </div>
          <p>{{ blog.description }}</p>
        </nuxt-link>
      </div>
    </UContainer>
  </main>
</template>
