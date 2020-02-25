<template>
  <div id="now-playing-container">
    <img v-bind:src="nowPlaying.sArtwork">
    <div>
      <p id="now-playing-artist">{{nowPlaying.sArtist}}</p>
      <p id="now-playing-title">{{nowPlaying.sSong}}</p>
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

