<template>
  <div>
    <Gbutton>你好</Gbutton>
    <Gbutton loading>加载中</Gbutton>
    <Gbutton icon="settings">加载中</Gbutton>

  </div>
</template>
<script>

import Gbutton from './button/button'
export default {
  name: '',
  components: {
    Gbutton
  },
  data(){
    return {
    }
  },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
