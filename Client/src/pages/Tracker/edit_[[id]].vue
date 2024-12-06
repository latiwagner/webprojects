<script setup lang="ts">
import { ref } from 'vue'
import { type Activity, getById, update } from '@/models/activities'
import { useRoute } from 'vue-router'
const activity = ref({} as Activity)
const route = useRoute()

route.params.id &&
  getById(+route.params.id).then((data) => {
    activity.value = data.data
  })

function onsubmit() {
    update(activity.value).then((data) => {
      console.log(data)
    })
}
</script>

<template>
  <div>
    <h1 class="title">Edit Activity</h1>
    <form @submit.prevent="onsubmit">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" v-model="activity.title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Distance</label>
        <div class="control">
          <input class="input" v-model="activity.distance" />
        </div>
      </div>
      <div class="field">
        <label class="label">Duration</label>
        <div class="control">
          <input class="input" type="text" v-model="activity.duration" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
