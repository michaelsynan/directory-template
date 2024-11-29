<script setup lang="ts">
interface Profile {
  name: string;
  text: string;
  image: string;
}

const profiles: Profile[] = [
  { name: "Michael", text: "Michael has been instrumental in revamping our web design to be more modern and user-friendly.", image: "/michael_synan.webp" },
  { name: "Cecily", text: "Cecily has led our marketing team to new heights with innovative strategies and strong leadership.", image: "michael_synan.webp" }
];
</script>


<template>
  <UContainer class="flex flex-col justify-center items-center py-32">
    <h2 class="text-4xl pb-16 font-bold">Meet the Team</h2>
    <div class="flex flex-row items-start gap-10">
      <HomeProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
        :image="profile.image" class="w-1/2" />
    </div>
  </UContainer>
</template>

<style scoped>
/* Tailwind CSS handles styling */
</style>


<style scoped></style>
