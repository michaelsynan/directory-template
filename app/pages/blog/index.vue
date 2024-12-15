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
        <nuxt-link :to="blog.path" class="flex flex-col gap-2">
          <NuxtImg :src="blog.image" :alt="blog.title" class="rounded-lg" />
          <div class="flex flex-col gap-1">
            <h2>{{ blog.title }}</h2>
            <div class="flex flex-row gap-2">
              <span class="border border-juju-500 px-3 py-1.5 rounded-sm text-sm font-bold">{{ blog.category }}</span>
              <time :datetime="blog.date" class="block">{{ new Date(blog.date).toLocaleDateString() }}</time>
            </div>
            <p>{{ blog.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </UContainer>
  </main>
</template>
