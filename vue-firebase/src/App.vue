<script setup lang="ts">
import SongsList from './components/SonsgList.vue';
import { onMounted, ref } from 'vue';
import { getSongs } from './firebase/songs';
import type { Song } from './types';

const songs = ref<Song[]>([]);

onMounted(async ()=> {
  getSongs(songs)
})

</script>

<template>
  <main>
    <SongsList :songs="songs" ></SongsList>
  </main>
</template>

<style scoped>
 
</style>
