<template>
  <div class="flex min-w-full">
    <div
      v-if="props.alignment === 'left'"
      class="flex min-w-full justify-start gap-x-6 overflow-x-hidden"
    >
      <div
        v-if="props.alignment === 'left'"
        class="max-w-[50%] rounded-2xl bg-neutral-200 p-3 dark:bg-neutral-800"
      >
        <p class="h-fit break-words">
          <slot />
        </p>
      </div>
    </div>
    <div
      v-if="props.alignment === 'right'"
      class="flex min-w-full justify-end gap-x-6 overflow-x-hidden"
    >
      <div
        v-if="props.alignment === 'right'"
        class="max-w-[50%] rounded-2xl bg-blue-100 p-3 text-neutral-900 dark:bg-blue-300"
      >
        <p class="h-fit break-words">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  alignment: "right" | "left";
}>();
</script>
