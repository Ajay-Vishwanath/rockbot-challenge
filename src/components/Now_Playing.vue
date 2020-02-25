<template>
  <div>
     {{ nowPlaying }}
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