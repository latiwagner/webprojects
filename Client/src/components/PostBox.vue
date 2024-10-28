<script setup lang="ts">
import type { Activity } from '@/models/activities'

const props = defineProps<{ activity: Activity }>()
const { activity } = props
</script>

<template>
  <div class="box">
    <article class="media">
        <div class="media-left">
        <figure class="image is-64x64">
            <img :src="activity.posterIcon" alt="" />
        </figure>
        </div>  
        <div class="media-content">
        <div class="content">
            <p>
              <strong>{{ activity.posterName }}</strong>
              <br />
              <small>{{ activity.date }}</small>
              <br />
              {{ activity.title }}
            </p>
              <div class="stats">
                <h4>{{ activity.distance }} mi.</h4> <h4>{{ activity.duration }} min.</h4>
              </div>
        </div>
        <nav class="level is-mobile">
            <div class="level-left">
            <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
            </a>
            <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
            </a>
            <a class="level-item" aria-label="like">
                <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
            </a>
            </div>
            <div class="level-right">
                <slot/>
            </div>
        </nav>
        </div>
    </article>
  </div>
</template>

<style scoped>
.stats{
    display: flex;
    flex-wrap: wrap;
    width: 15rem;
    justify-content: space-evenly;
}
/*h4{
    display: inline;
}*/
.box{
    margin: 0 12rem;
}
</style>