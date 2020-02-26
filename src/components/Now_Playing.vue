<template>
  <div id="now-playing-container">
    <img id="now-playing-artwork" v-if="nowPlaying.sArtwork"
    v-bind:src="nowPlaying.sArtwork">
    <div>
      <p id="now-playing-artist" v-if="nowPlaying.sArtist">{{nowPlaying.sArtist}}</p>
      <p id="now-playing-title" v-if="nowPlaying.sSong">{{nowPlaying.sSong}}</p>
    </div>
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

