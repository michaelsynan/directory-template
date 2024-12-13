<script setup lang="ts">
interface Profile {
  name: string
  text: string
  image: string
  socials?: Array<string>
}

const profiles: Profile[] = [
  { name: 'Michael Synan', text: 'Michael has been instrumental in revamping our web design to be more modern and user-friendly.', image: '/michael_synan.webp', socials: ['https://github.com', 'https://linkedin.com'] },
  { name: 'Cecily Nicole Gaither', text: 'Cecily has led our marketing team to new heights with innovative strategies and strong leadership.', image: 'michael_synan.webp' },
]
</script>

<template>
  <UContainer class="flex flex-col justify-center items-center">
    <div class="my-20 w-full flex flex-col gap-4">
      <h2>
        Meet the Team
      </h2>
      <div>
        Some explainer text in here
      </div>
    </div>
    <div class="flex flex-col items-start gap-10">
      <TeamProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
        :socials="profile.socials" :image="profile.image" />
    </div>
  </UContainer>
</template>
