<template>
  <div>
     {{ nowPlaying }}
  </div>
</template>

<script>

export default {
  props: [
      'nowPlaying',
      ],
  name: 'NowPlaying'
}
</script>