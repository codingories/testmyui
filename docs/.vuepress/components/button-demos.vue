<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon=""settings>默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button/button.vue'
  // import Button from '@/src/button/button.vue'

  export default {
    data() {
      return {
        content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>`.replace(/\t+| +/g, '').trim()
      }
    },
    components: {
      'g-button': Button,

    }
  }
</script>
