<template>
  <svgInline
    :src="svg"
    :width="size"
    :height="size"
  />
</template>
<script>
import svgInline from 'vue-inline-svg'
import * as Icons from '@/icons'

export default {
  name: 'AppIcon',
  components: {
    svgInline
  },
  props: {
    name: {
      type: String,
      default: undefined,
      required: true
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: [Number, String],
      default: 24
    }
  },
  data() {
    return {
      svg: Icons[this.name]
    }
  },
  mounted() {
  }
}
</script>
