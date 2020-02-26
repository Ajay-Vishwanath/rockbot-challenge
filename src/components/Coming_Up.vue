<template>
  <div v-if="artistQueue !== null">
     <ComingUpItem
       v-for="comingUpItem in artistQueue"
       v-bind:comingUpItem="comingUpItem"
       v-bind:key="comingUpItem.id"
     ></ComingUpItem>
  </div>
</template>

<script>
import ComingUpItem from './Coming_Up_Index_Item'

export default {
  name: 'ComingUp',
  props: [
      'artistQueue',
      ],
  components : {
    ComingUpItem
  }
}
</script>