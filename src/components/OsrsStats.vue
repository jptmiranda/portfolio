<script setup lang="ts">
import { getDetailsList } from "../lib/runescape";

const detailsList = await getDetailsList();
</script>

<template>
  <h2 class="mt-8 font-audiowide text-3xl">Oldschool Runescape</h2>

  <div class="mt-4" v-for="details in detailsList">
    <h3 class="text-2xl">{{ details.name }}</h3>

    <div class="mt-4 inline-grid grid-cols-8 sm:grid-cols-12 gap-x-4 gap-y-1">
      <div
        class="group flex relative justify-center items-center flex-col"
        v-for="(skill, idx) in details.skills"
      >
        <span
          class="group-hover:opacity-100 opacity-0 z-10 transition-opacity border-2 border-foreground bg-background p-2 rounded leading-none absolute left-1/2 -translate-x-1/2 m-4 mx-auto"
          :class="
            (idx + 1) / 12 > 1 ? 'translate-y-full' : '-translate-y-full -mt-1'
          "
        >
          {{ skill.name }}
        </span>

        <img
          class="w-5 h-5"
          width="20"
          height="20"
          :src="skill.image"
          :alt="skill.name"
        />

        <p>{{ skill.level }}</p>
      </div>
    </div>
  </div>
</template>
