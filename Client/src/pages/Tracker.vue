<script setup lang="ts">
import { ref } from 'vue'
import ModalOverlay from '@/components/ModalOverlay.vue';

const isModalOpen = ref(false)
</script>

<template>
  <main>
    <header class="block">
      <h1 class="title is-inline">Your Fitness Tracker</h1>
      <button class="button is-info is-medium" id="postButton" @click="isModalOpen = true">New Post...</button>
    </header>
    <div>
      <ModalOverlay :is-open="isModalOpen">
        <header class="modal-card-head">
          <p class="modal-card-title">New Post</p>
          <button class="delete" aria-label="close" @click="isModalOpen = false"></button>
        </header>
        <section class="modal-card-body">
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button class="button is-success">Submit</button>
            <button class="button" @click="isModalOpen = false">Cancel</button>
          </div>
        </footer>
      </ModalOverlay>
    </div>
  </main>
</template>

<style scoped>
#postButton{
  float: right;
  margin-right: 2rem;
}
</style>