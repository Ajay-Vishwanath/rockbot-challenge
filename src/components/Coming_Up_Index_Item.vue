<template>
  <div id="coming-up-item-container">
    <div id="coming-up-song-info">
      <p id="coming-up-artist">{{comingUpItem.sArtist}}</p>
      <p id="coming-up-title">{{comingUpItem.sSong}}</p>
    </div>
    <div id="upvotes-container">
      <p id="coming-up-song-upvotes"
      v-bind:class="{ positive: positive}">{{upvotes(comingUpItem)}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComingUpItem',
  props: [
      'comingUpItem',
      ],
  data(){
    return{
      positive: true
    }
  },
  methods: {
    upvotes(comingUpItem){
      const total = comingUpItem.iLikes - comingUpItem.iDislikes
      if (total >= 0){
        return '+ ' + total.toString();
      } else {
        return '- ' + total.toString();
      }
    }
  },
  mounted(){
    if (this.comingUpItem.iLikes - this.comingUpItem.iDislikes < 0){
      this.positive = false;
    }
  }
}
</script>

<style src="../styles/coming_up.css"></style>


