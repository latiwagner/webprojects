<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type User } from '@/models/users' 

const users = ref<User[]>([])
users.value = getAll().data
</script>

<template>
  <main>
    <div class="block">
      <h1 class="title">User Control</h1>
      <p>Later, this page will only be viewable by admins.</p>
      <p>This page will allow admins to view a list of users. Admins can delete, edit, or add users here.</p>
    </div>
    <div class="block">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" :user="user">
            <td><img :src="user.image" width="30px" height="30px"/></td>
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.admin }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
