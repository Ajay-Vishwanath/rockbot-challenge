<template>
  <div id="coming-up-item-container">
    <div id="coming-up-song-info">
      <p id="coming-up-artist">{{comingUpItem.sArtist}}</p>
      <p id="coming-up-title">{{comingUpItem.sSong}}</p>
    </div>
    <p id="coming-up-song-upvotes">{{comingUpItem.iLikes - comingUpItem.iDislikes}}</p>
  </div>
</template>

<script>

export default {
  name: 'ComingUpItem',
  props: [
      'comingUpItem',
      ]
}
</script>

<style src="../styles/coming_up.css"></style>


