<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
  return queryCollection('blogs')
    .select('title', 'path', 'description', 'date', 'tags')
    .all()
})
</script>

<template>
  <main class="text-white min-h-screen">
    <SharedHero
      heading="Blog"
      description="Check out our blogs"
    />
    <UContainer class="pt-20 flex flex-col gap-4">
      <div
        v-for="blog in blogs"
        :key="blog.path"
      >
        <nuxt-link :to="blog.path">
          <h2>{{ blog.title }}</h2>
          <span
            v-for="tag in blog.tags"
            :key="tag"
            class="bg-juju-500 py-0.5 px-1 rounded mr-2 text-sm"
          >{{
            tag
          }}</span>
          <time
            :datetime="blog.date"
            class="block"
          >{{ new Date(blog.date).toLocaleDateString() }}</time>
          <p>{{ blog.description }}</p>
        </nuxt-link>
      </div>
    </UContainer>
  </main>
</template>
