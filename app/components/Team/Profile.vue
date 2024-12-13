<script setup lang="ts">
const props = defineProps<{
  name: string
  text: string
  image: string
  socials?: Array<string>
}>()

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = '//cdn.credly.com/assets/utilities/embed.js'
  document.body.appendChild(script)
})
</script>

<template>
  <div class="flex flex-row p-6 m-2 gap-4">
    <NuxtImg :src="props.image" class="rounded" />
    <div class="max-w-max flex flex-col gap-4">
      <div class="text-2xl font-bold">
        {{ props.name }}
      </div>
      <p class="text-stone-500">
        {{ props.text }}
      </p>
      <div v-if="props.socials" class="text-stone-500">
        <p v-for="(social, index) in props.socials" :key="index">
          social <a :href="social">{{ social }}</a>
        </p>
      </div>
      <slot>
        <div v-if="props.name == 'Michael Synan'" data-iframe-width="150" data-iframe-height="270"
          data-share-badge-id="77e58564-6fe0-44c8-b79f-c566daab4bf3" data-share-badge-host="https://www.credly.com">
        </div>
      </slot>
    </div>
  </div>
</template>