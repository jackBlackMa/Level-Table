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
        pSrc:`../../../static/web/viewer.html?file=${'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'}`
      }
    },
    methods: {
      open () {
        localStorage.setItem("fileName",'123')
        window.open(this.pSrc)
      }
    }
  }
</script>

<style scoped>

</style>
