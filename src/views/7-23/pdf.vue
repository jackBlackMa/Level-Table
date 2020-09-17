<template>
  <div style="height: 100vh">
    <!--<iframe :src="pSrc" width="100%" height="100%"></iframe>-->
    <button @click="open">点击</button>
  </div>
</template>

<script>
  export default {
    name: "pdf.js",
    data(){
      return {
        // pSrc:`../../../static/web/viewer.html?file=${'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'}`
        pSrc : 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
      }
    },
    methods: {
      open () {
        let oA = document.createElement('a');
        oA.href = this.pSrc;
        oA.download="filename"
        oA.click()
      }
    }
  }
</script>

<style scoped>

</style>
