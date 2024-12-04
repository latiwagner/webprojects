<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type User } from '@/models/users' 
import { refUser } from '@/models/currentUser';

const users = ref<User[]>([])
  getAll().then((data) => users.value = data.data);
const activeUser = refUser()
</script>

<template>
  <main>
      <div v-for="logged in activeUser" :key="logged.user.id">
        <div v-for="user in users" :key="user.id">
          <div class="hero" v-if="logged.user.username === user.username">
            <div class="hero-body">
              <p class="title">Lifetime Stats</p>
              <p class="subtitle">{{ user.totalDistance }} mi. <br/>
                {{ user.totalDuration }} min.
              </p>
              
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<style scoped>

</style>