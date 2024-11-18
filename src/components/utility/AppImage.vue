<template>
  <img
    :src="img"
  />
</template>
<script>
import * as Images from '@/images'

export default {
  name: 'AppImage',
  props: {
    name: {
      type: String,
      default: undefined,
      required: true
    },
    alt: {
      type: String,
      default: undefined,
      required: true
    }
  },
  data() {
    return {
      img: Images[this.name]
    }
  },
}
</script>
