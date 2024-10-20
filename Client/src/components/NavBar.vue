<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
<nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item"><img alt="FitTrack logo" class="logo" src="@/assets/fitlogo.svg" width="54" height="38" /></RouterLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
      :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

  <div class="navbar-menu" :class="{ 'is-active': isOpen }">
    <div class="navbar-start">
        <RouterLink to="/stats" class="navbar-item">Your Stats</RouterLink>
        <RouterLink to="/tracker" class="navbar-item">Your Tracker</RouterLink>
        <RouterLink to="/activity" class="navbar-item">Activity</RouterLink>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/admin/usercontrol" class="navbar-item">
            Users
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-inverted">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
</template>



<style scoped>
  .navbar-item {
    font-weight: bold;
  }
  /*.logo{
    margin-right: 15px;
  }*/
</style>