<template>
  <router-link
    :to="
      props.name
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('”', '')
        .replaceAll('“', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
    "
    :class="
      $route.name ===
      props.name
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('”', '')
        .replaceAll('“', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        ? 'flex justify-between bg-neutral-300 bg-opacity-40 px-6 py-4 dark:bg-neutral-700'
        : 'flex justify-between px-6 py-4 transition duration-300 hover:bg-neutral-300 hover:bg-opacity-40 dark:hover:bg-neutral-700'
    "
  >
    <div class="flex gap-x-4">
      <div class="flex flex-col">
        <h2>{{ props.name }}</h2>
        <span
          class="max-w-full overflow-x-hidden text-ellipsis whitespace-nowrap text-neutral-600 dark:text-neutral-400"
          >{{ props.msg }}</span
        >
      </div>
    </div>
    <span class="text-sm text-neutral-600 dark:text-neutral-400">{{
      props.time
    }}</span>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  msg: string;
  time: string;
}>();
</script>
