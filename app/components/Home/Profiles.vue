<script setup lang="ts">
interface Profile {
  name: string;
  text: string;
}

const profiles: Profile[] = [
  { name: "Michael", text: "Michael has been instrumental in revamping our web design to be more modern and user-friendly." },
  { name: "Cecily", text: "Cecily has led our marketing team to new heights with innovative strategies and strong leadership." }
];
</script>


<template>
  <UContainer class="flex flex-row justify-center items-start py-32">
    <HomeProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
      class="w-1/2" />
  </UContainer>
</template>

<style scoped>
/* Tailwind CSS handles styling */
</style>


<style scoped></style>
