<template>
  <div class="flex">
    <Sidebar />
    <div class="flex w-3/4 justify-center">
      <div class="flex flex-col justify-center">
        <div class="flex max-w-xl flex-col gap-y-4">
          <IconCellphoneLink
            class="text-4xl text-blue-600 dark:text-blue-300"
          />
          <strong class="text-2xl">Keep your phone online.</strong>
          <p class="text-neutral-600 dark:text-neutral-400">
            Your phone is paired so you can send & receive messages on this
            device. To use less data, connect your phone to Wi-Fi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";

import IconCellphoneLink from "virtual:icons/mdi/cellphone-link";
</script>
