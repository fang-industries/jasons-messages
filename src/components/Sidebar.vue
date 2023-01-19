<template>
  <div
    class="h-screen w-1/4 overflow-y-auto border-r-2 border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800"
  >
    <h1 class="p-6 text-lg shadow-lg">Messages</h1>
    <Conversation
      img="https://fangdustry.me/assets/jason.929209c1.png"
      name="Jason fang"
      msg="aaaa"
      time="24-24-24"
    />
  </div>
</template>

<script setup lang="ts">
import Conversation from "./Conversation.vue";
</script>
