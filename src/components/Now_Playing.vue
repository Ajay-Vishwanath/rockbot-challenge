<template>
  <div id="now-playing-container">
    <img id="now-playing-artwork" v-if="nowPlaying"
    v-bind:src="nowPlaying.sArtwork">
    <div>
      <p id="now-playing-artist" v-if="nowPlaying">{{nowPlaying.sArtist}}</p>
      <p id="now-playing-title" v-if="nowPlaying">{{nowPlaying.sSong}}</p>
    </div>
    <p v-if="!nowPlaying">No Song is Currently Playing :(</p>
  </div>
</template>

<script>

export default {
  name: 'NowPlaying',
  props: [
      'nowPlaying',
      ]
}
</script>

<style src="../styles/now_playing.css"></style>

