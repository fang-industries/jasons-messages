<template>
  <div class="flex min-w-full">
    <div
      v-if="props.alignment === 'left'"
      class="flex min-w-full justify-start gap-x-6 overflow-x-hidden"
    >
      <img
        v-if="img"
        :src="img"
        :class="
          props.alignment === 'left'
            ? 'mt-auto h-10 w-10 rounded-full'
            : 'hidden'
        "
      />
      <div
        v-if="props.alignment === 'left'"
        :class="
          props.alignment === 'left' && !img
            ? 'ml-16 max-w-[50%] rounded-2xl bg-neutral-200 p-3 dark:bg-neutral-800'
            : 'max-w-[50%] rounded-2xl bg-neutral-200 p-3 dark:bg-neutral-800'
        "
      >
        <p class="h-fit break-all">
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
        <p class="h-fit break-all">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img?: string;
  alignment: "right" | "left";
}>();
</script>
