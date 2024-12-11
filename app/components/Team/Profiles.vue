<script setup lang="ts">
interface Profile {
  name: string;
  text: string;
  image: string;
}

const profiles: Profile[] = [
  { name: "Michael Synan", text: "Michael has been instrumental in revamping our web design to be more modern and user-friendly.", image: "/michael_synan.webp" },
  { name: "Cecily Nicole Gaither", text: "Cecily has led our marketing team to new heights with innovative strategies and strong leadership.", image: "michael_synan.webp" }
];
</script>


<template>
  <UContainer class="flex flex-col justify-center items-center">
    <h2 class="pb-16">Meet the Team</h2>
    <div class="flex flex-col items-start gap-10">
      <TeamProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
        :image="profile.image" class="" />
    </div>
  </UContainer>
</template>

<style scoped>
/* Tailwind CSS handles styling */
</style>


<style scoped></style>
