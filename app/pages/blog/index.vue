<template>
    <main class="text-white min-h-screen">
        <div class="bg-juju-950 py-40">
            <UContainer class="flex flex-col gap-10">
                <h1 class="text-5xl">Blog</h1>
                <p class="text-lg">Welcome to our blog. Here you'll find our latest news, updates, and articles.</p>
            </UContainer>
        </div>
        <UContainer class="pt-20">
            <ContentList path="/blog" v-slot="{ list }">
                <div v-for="article in list" :key="article._path" class="pb-10">
                    <NuxtLink :to="`${article._path}`">
                        <!-- Assuming each article has a 'slug' property for URL -->
                        <h2 class="text-4xl">{{ article.title }}</h2>
                    </NuxtLink>
                    <pre class="flex flex-row text-stone-400 pb-3">
                        <time :datetime="article.date">{{ article.date }}</time>
                        <span>&nbsp;•&nbsp;</span>
                        <span>{{ article.readingTime }}</span>
                    </pre>
                    <p>{{ article.description }}</p>
                    <div>
                    </div>
                </div>
            </ContentList>
        </UContainer>
    </main>
</template>
