<template>
    <main class="text-white pt-20 min-h-screen">
        <UContainer>
            <ContentDoc>
                <template v-slot="{ doc }">
                    <article>
                        <h1>{{ doc.title }}</h1>
                        <ContentRenderer :value="doc" />
                        <NuxtLink to="/blog" class="underline">Back to all blogs</NuxtLink>
                    </article>
                </template>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
            </ContentDoc>
        </UContainer>
    </main>
</template>
