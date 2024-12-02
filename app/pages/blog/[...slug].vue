<template>
    <main class="text-white pt-20 min-h-screen">
        <UContainer :ui="{
            constrained: 'max-w-4xl'
        }">
            <ContentDoc>
                <template v-slot="{ doc }">
                    <article class="flex flex-col gap-4">
                        <h1>{{ doc.title }}</h1>
                        <ContentRenderer :value="doc" />
                        <div class="py-10 border-t mt-10 border-stone-500">
                            <UButton class="flex-none max-w-max" icon="i-mdi-keyboard-backspace" to="/blog">Back to all
                                blogs</UButton>
                        </div>
                    </article>
                </template>
                <template #not-found>
                    <div class="flex flex-col gap-4">
                        <h1>Blog post not found</h1>
                        <p>Sorry, we couldn't find the blog post you were looking for.</p>
                        <UButton class="flex-non max-w-max" icon="i-mdi-keyboard-backspace" to="/blog">Back to all blogs
                        </UButton>
                    </div>
                </template>
            </ContentDoc>
        </UContainer>
    </main>
</template>
