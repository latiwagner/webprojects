<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Activity } from '@/models/activities'
import PostBox from '@/components/PostBox.vue'

const activities = ref<Activity[]>([])
activities.value = getAll().data
</script>

<template>
  <main>
    <h1 class="title">Friend Activity</h1>
    <div class="block" v-for="activity in activities" :key="activity.id">
      <PostBox :activity="activity"/>
    </div>
  </main>
</template>
