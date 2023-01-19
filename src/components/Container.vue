<template>
  <div class="flex w-3/4 justify-center bg-neutral-100 dark:bg-neutral-900">
    <div class="h-screen w-full overflow-y-auto">
      <h1
        class="fixed top-0 w-full bg-neutral-100 bg-opacity-90 p-6 text-lg shadow-xl backdrop-blur-md dark:bg-neutral-900 dark:bg-opacity-90"
      >
        {{ name }}
      </h1>
      <div class="overflow-y-auto">
        <div class="w-full py-32 px-6">
          <div class="flex flex-col gap-y-12">
            <div class="flex flex-col gap-y-4">
              <p
                class="text-center text-sm text-neutral-600 dark:text-neutral-400"
              >
                {{ time }}
              </p>
            </div>
            <div class="flex w-full flex-col gap-y-4">
              <slot />
            </div>
          </div>
        </div>
        <div
          class="fixed bottom-0 flex w-3/4 justify-center bg-neutral-100 bg-opacity-90 p-6 text-neutral-600 backdrop-blur-md dark:bg-neutral-700 dark:bg-opacity-90 dark:text-neutral-400"
        >
          <p>Texting is not available right now.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  time: string;
  name: string;
}>();
</script>
