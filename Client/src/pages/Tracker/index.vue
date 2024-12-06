<script setup lang="ts">
import { ref } from 'vue'
import ModalOverlay from '@/components/ModalOverlay.vue'
import { getAll, remove, type Activity} from '@/models/activities'
import { refUser } from '@/models/currentUser'
import PostBox from '@/components/PostBox.vue';
const activities = ref<Activity[]>([])
  getAll().then((data) => activities.value = data.data);
const isAddModalOpen = ref(false)
const activeUser = refUser()
</script>

<template>
  <main>
    <header class="block">
      <h1 class="title is-inline">Your Fitness Tracker</h1>
      <button class="button is-info is-medium" id="postButton" @click="isAddModalOpen = true">New Post...</button>
    </header>


    <div>
      <ModalOverlay :is-open="isAddModalOpen">
        <header class="modal-card-head">
          <p class="modal-card-title">New Post</p>
          <button class="delete" aria-label="close" @click="isAddModalOpen = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="block">
            <b>Activity Description</b>
            <textarea class="textarea" placeholder="Skated through town"></textarea>
          </div>
          <div class="block">
            <b>Distance</b>
            <input class="input" type="number" placeholder="Enter a number" />
          </div>
          <div class="block">
            <b>Duration</b>
            <input class="input" type="number" placeholder="Enter a number" />  
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button class="button is-success">Submit</button>
            <button class="button" @click="isAddModalOpen = false">Cancel</button>
          </div>
        </footer>
      </ModalOverlay>
    </div>

    <div>

    </div>

    <div class="block">
      <div v-for="logged in activeUser" :key="logged.user.id">
        <div class="block" v-for="activity in activities" :key="activity.id">
          <div v-if="logged.user.username === activity.posterName">
            <PostBox :activity="activity">
              <div class="buttons">
                <button class="button is-small">
                  <RouterLink :to="'/tracker/edit' + activity.id">Edit</RouterLink> 
                </button>
                <button class="button is-danger is-small" @click="remove(activity.id)">X</button>
              </div>
            </PostBox>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
#postButton{
  float: right;
  margin-right: 2rem;
}
</style>