<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
    return queryCollection('blogs')
        .select('title', 'path', 'description')
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
        <UContainer class="pt-20">
            <div>{{ blogs }}</div>
        </UContainer>
    </main>
</template>
