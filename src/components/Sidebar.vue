<template>
  <div
    class="h-screen w-1/4 overflow-y-auto border-r-2 border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800"
  >
    <h1 class="p-6 text-lg shadow-lg">Messages</h1>
    <Conversation
      name="“I want to say thank you.”"
      msg=" Truth is, I don’t think I deserve to be with you. I’ve lied to you, I’ve hurt you, left you, made promises and never kept them."
      time="24-24-24"
    />
  </div>
</template>

<script setup lang="ts">
import Conversation from "./Conversation.vue";
</script>
