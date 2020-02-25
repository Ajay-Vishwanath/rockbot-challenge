<template>
  <div>
     {{ artistQueue }}
  </div>
</template>

<script>

export default {
  name: 'ComingUp',
  props: [
      'artistQueue',
      ]
}
</script>