<template>
  <img v-bind:src="getArtwork(topCategoryItem)" v-bind:alt="topCategoryItem">
</template>

<script>

export default {
    name: 'TopCategoryItem',
    props: [
      'topCategoryItem',
    ],
    methods: {
        getArtwork: function(topCategoryItem){
            if (topCategoryItem.sUserImage){
                return topCategoryItem.sUserImage
            } else {
                return topCategoryItem.sArtistImage
            }
        }
    }
}
</script>

<style src="../styles/top_items.css"></style>

