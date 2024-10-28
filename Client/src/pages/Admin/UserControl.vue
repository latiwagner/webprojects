<script setup lang="ts">
import { ref } from 'vue'
import { getAll, removeUser, type User } from '@/models/users' 
import { refUser } from '@/models/currentUser';

const users = ref<User[]>([])
users.value = getAll().data
const activeUser = refUser()
</script>

<template>
  <main>
    <div class="block">
      <h1 class="title">User Control</h1>
      <p>This page is only visible by admins. Log in as caseyreardon to see.</p>
    </div>
    <div class="block">
      <div v-for="logged in activeUser" :key="logged.user.id">
        <table class="table" v-if="logged.user.admin">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Admin?</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" :user="user">
              <td><img :src="user.image" width="30px" height="30px"/></td>
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.admin }}</td>
              <td>
                <div class="buttons">
                  <button class="button is-small">Edit</button>
                  <button class="button is-danger is-small" @click="removeUser(user)">X</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </main>
</template>
