<template>
    <main class="text-white pt-20 min-h-screen">
        <UContainer>
            <ContentList path="/blog" v-slot="{ list }">
                <div v-for="article in list" :key="article._path" class="pb-10">
                    <NuxtLink :to="`/blog/${article.slug}`">
                        <!-- Assuming each article has a 'slug' property for URL -->
                        <h2 class="text-4xl">{{ article.title }}</h2>
                    </NuxtLink>
                    <p>{{ article.description }}</p>
                </div>
            </ContentList>
        </UContainer>
    </main>
</template>
