<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <div class="modal" :class="{ isOpen }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-success">Submit</button>
          <button class="button">Cancel</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>

</style>