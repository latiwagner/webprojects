<script setup lang="ts">
import { ref } from 'vue'
import { getAll, remove, search, type User } from '@/models/users' 
import { refUser } from '@/models/currentUser'
import { OAutocomplete, type OptionsPropItem } from "@oruga-ui/oruga-next";

const users = ref<User[]>([])
  getAll().then((data) => users.value = data.data);
const activeUser = refUser()

const selected = ref('')
const options = ref<OptionsPropItem<User>[]>([])

async function getAsyncData(query: string) {
  const data = await search(query)
  options.value = data.data.map((user: User) => {
    return {
      value: user,
      label: user.username
    }
  })
}

</script>

<template>
  <main>
    <div class="block">
      <h1 class="title">User Control</h1>
      <p>This page is only visible by admins. Log in as caseyreardon to see.</p>
    </div>
    <div class="block">
      <section>
        <o-field label="Find a user.">
            <o-autocomplete
                v-model="selected"
                :options="options"
                :debounce="500"
                @input="getAsyncData"
                rounded
                expanded
                placeholder="e.g. Casey"
                icon="search"
                clearable
                open-on-focus>
                <template #empty>No results found</template>
            </o-autocomplete>
        </o-field>

        <p><b>Selected:</b> {{ selected }}</p>
      </section>
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
                  <button class="button is-danger is-small" @click="remove(user.id)">X</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </main>
</template>
