<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
    return queryCollection('blogs')
        .select('title', 'path', 'description', 'date', 'tags')
        .all()
})
</script>


<template>
    <main class="text-white min-h-screen">
        <div class="bg-juju-950 py-40">
            <UContainer class="flex flex-col gap-10">
                <h1 class="text-5xl">Blog</h1>
                <p class="text-lg">Welcome to our blog. Here you'll find our latest news, updates, and articles.</p>
            </UContainer>
        </div>
        <UContainer class="pt-20 flex flex-col gap-4">
            <div v-for="blog in blogs" :key="blog.path">
                <nuxt-link :to="blog.path">
                    <h2>{{ blog.title }}</h2>
                    <span v-for="tag in blog.tags" :key="tag" class="bg-juju-500 p-1 rounded mr-1.5">{{ tag }}</span>
                    <time :datetime="blog.date" class="block">{{ new Date(blog.date).toLocaleDateString() }}</time>
                    <p>{{ blog.description }}</p>
                </nuxt-link>
            </div>
        </UContainer>
    </main>
</template>
